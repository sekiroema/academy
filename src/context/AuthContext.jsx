import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged , signOut} from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth , db} from "../firebase/firebase";
import { doc , setDoc , getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";



export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
   
    const [loading, setLoading] = useState(false);
    const [loadingDisplayCurrentUser , setLoadingDisplayCurrentUser] = useState(true)
    const [currentUser , setCurrentUser] = useState(null)

    const regiserHandler = async(data) =>{
       const {firstname , lastname , phone , email , password} = data;
       try {
        setLoading(true);
        const userdata = await createUserWithEmailAndPassword( auth , email , password);

        console.log("successfully registered" , userdata.user);

        await setDoc(doc( db , "users" , userdata.user.uid) ,{
          id: userdata.user.uid,
          firstname ,
          lastname ,
          phone ,
          email ,
          createdAt : new Date(),
        });
        console.log("user data added to firestore");
        return { success: true };

       } catch (error) {

        console.log("faild registeration" , error.message);
        return { success: false , message: error.message };

       }finally{
        setLoading(false);
       }
    }

      const loginHandler = async(data) => {         
        const { email , password} = data
        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth , email , password)
            setLoadingDisplayCurrentUser(true)
            console.log('successful' )
            return { success : true}

        } catch (error) {
            console.log(error.message)
            return { success : false , message : error.message}

        }finally{
            setLoading(false)
        }
    }

    const fetchUserData = async(uid)=>{
        const user = await getDoc( doc(db , 'users' , uid))
        if(user.exists()){
            setCurrentUser(user.data())
        }
    }

    const logout = async()=>{
        try {
            await signOut(auth)
            setCurrentUser(null)
        } catch (error) {
            console.log(error.message)            
        }
    }
    
        useEffect(()=>{
        const records = onAuthStateChanged(auth , async(user)=>{
            if(user){
              await fetchUserData(user.uid)
            } else{
                setCurrentUser(null)
            }
            setLoadingDisplayCurrentUser(false)
        })
        return ()=> records()
    } , [])


    return (
    <authContext.Provider value={{
      regiserHandler,
      loginHandler ,
      fetchUserData ,
      loading ,
      logout ,
      currentUser ,
      loadingDisplayCurrentUser 
      }}>

      {children}
    </authContext.Provider>
  );
}

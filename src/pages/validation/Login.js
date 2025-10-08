import * as z from "zod";

const LoginSchema = z.object({
   
    email : z.string().min(2 , {message :'email is req'}).email({message: "This email is invalid"}),
    password : z.string().min(5 , {message : 'passwared must be 5 characters with 1 or more spetial characters'})
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/ , {message : 'U should enter correct pass'}),
   
})

export default LoginSchema
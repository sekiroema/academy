import * as z from "zod";

const RegisterSchema = z.object({
    firstname : z.string().min(2 , {message : 'firstName is req'}),
    lastname : z.string().min(2 , {message : "lastName is req"}),
    email : z.string().min(2 , {message :'email is req'}).email({message: "This email is invalid"}),
    phone : z.string().min(1 , {message : 'phone is req'}).regex(/^01[0-25][0-9]{8}$/ , {message : 'This number is invalid'}),
    password : z.string().min(5 , {message : 'passwared must be 5 characters with 1 or more spetial characters'})
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/ , {message : 'U should enter correct pass'}),
    confirmedpassword : z.string().min(5 , {message : 'passwared must be 5 characters with 1 or more spetial characters'})
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/ , {message : 'U should enter correct pass'})


}).refine(same => same.password === same.confirmedpassword , {message : "passward must be matched " , path : "confirmedpassword"})


export default RegisterSchema
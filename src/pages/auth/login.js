import { Form } from '@/components/form'
import { signIn } from "next-auth/react";

export default function SignIn(){
const onSubmit = async (email , password) =>{
const data = await signIn('credentails' ,{ redirect : true , email , password})
console.log(data);
}

return <Form signin={true} onFormSubmit={onSubmit}/>
}
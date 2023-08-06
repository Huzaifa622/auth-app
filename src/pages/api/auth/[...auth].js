import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { getByEmail , verifyPassword } from "@/services/user" ;

export const authOptions ={
    sessions : {
     jwt : true
    },
    providers : [
             CredentialsProvider({
               async authorize({email , password}) {
                const user = getByEmail(email);
                if(!user){
                    alert('user not found');
                }
                const isValid = await verifyPassword(user.password , password);
                if(!isValid){
                    alert('password not match');
                }
                return {user}
               }
             })
              
             
    ]
}

export default NextAuth(authOptions);
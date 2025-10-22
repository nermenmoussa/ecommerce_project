
/*eslint-disable*/ 

import NextAuth,{User} from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth"{
    interface User{
        user:{
            email:string,
            name:string,
            role:string,
            image?:string
        }
        token:string

    }
        interface Session{
        user:User['user'] 
    }
}


    declare module "next-auth/jwt" {
         interface JWT extends User{}
    }
   
    
     
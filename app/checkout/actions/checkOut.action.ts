


'use server'

import getTokenAUth from "@/utilites/getTokenAUth"
import { error } from "console"

type shippingAddressType={
    "details":string,
    "city":string,
    "phone":string,
}

export async function checkOutOnline({cartId,url,shippingAddress}:{cartId:string,url:string,shippingAddress:shippingAddressType}){
   const token = await getTokenAUth()
   if(!token)
    throw error('unauthorized! login first')
   
    const res= await fetch (`${process.env.API}/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,{
        method:'POST',
        body:JSON.stringify({shippingAddress}),
        headers:{
            'content-type':'application/json',
            token
        }
        
    }

    )
    const data = await res.json()
    return data
}
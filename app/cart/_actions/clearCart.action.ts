'use server'
import getTokenAUth from "@/utilites/getTokenAUth";



export default async function clearCart(){
    const token = await getTokenAUth()
    if (!token)
        throw Error('UnAuthorized!login first')
 
    const res = await fetch (`${process.env.API}/cart` , 
        {cache:'no-store',
            method:'Delete',
            headers:{
                'content-type':'application/json',
                token
            }
      

        }
    )
    const payload = await res.json()
    return payload
}
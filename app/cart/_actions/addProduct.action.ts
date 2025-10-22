'use server'
import getTokenAUth from "@/utilites/getTokenAUth";



export default async function addProduct(productId:string){
    const token = await getTokenAUth()
    if (!token)
        throw Error('UnAuthorized!login first')
 
    const res = await fetch (`${process.env.API}/cart` , 
        {cache:'no-store',
            method:'POST',
            headers:{
                'content-type':'application/json',
                token
            },
            body:JSON.stringify({productId})

        }
    )
    const payload = await res.json()
    return payload
}
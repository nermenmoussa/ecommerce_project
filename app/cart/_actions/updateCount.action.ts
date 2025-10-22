'use server'
import getTokenAUth from "@/utilites/getTokenAUth";



export default async function updateCount({productId,count}:{productId:string,count:number}){
    const token = await getTokenAUth()
    if (!token)
        throw Error('UnAuthorized!login first')
 
    const res = await fetch (`${process.env.API}/cart/${productId}` , 
        {cache:'no-store',
            method:'PUT',
            headers:{
                'content-type':'application/json',
                token
            },
            body:JSON.stringify({count})

        }
    )
    const payload = await res.json()
    return payload
}
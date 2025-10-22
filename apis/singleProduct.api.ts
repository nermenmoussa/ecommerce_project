

export default async function getSingleProduct(prodId:string){

    const res = await fetch ( `https://ecommerce.routemisr.com/api/v1/products/${prodId}`
  
    )

const {data} = await res.json()
return data
}
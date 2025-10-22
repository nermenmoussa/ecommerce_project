import getProduct from '@/apis/product.api'
import { productInterface } from '@/app/_interfaces/product.interface'
import React from 'react'
import ProductItem from './ProductItem'

export default async function FeaturedProduct() {
const data:productInterface[] = await getProduct()

  return (
    <div className='flex flex-wrap'>
      {data.map((prod:productInterface)=><ProductItem key={prod._id} prod={prod}></ProductItem>)}
    </div>
  )
}

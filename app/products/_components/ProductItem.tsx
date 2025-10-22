import { productInterface } from '@/app/_interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductItemBtn from './ProductItemBtn'



export default async function  ProductItem({prod}:{prod:productInterface}) {
 
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6'>
        <div className='my-5 mx-5'>
<Link href={ `/products/${prod._id}/${prod.category._id}`}>
            <Image width={300} height={300} src={prod.imageCover} alt='' className='w-full'></Image>
            <span className='text-main'>{prod.category.name}</span>
            <p className='line-clamp-1'>{prod.title}</p>
            <div className='flex justify-between  '>
               <div>
                 <span className={ prod.priceAfterDiscount? 'line-through':'' }>{prod.price} EGP</span>
                 {prod.priceAfterDiscount && <span>{prod.priceAfterDiscount} EGP</span>}
               </div>
                <span>{prod.ratingsAverage}</span>
            </div>
</Link>
            <ProductItemBtn id={prod._id}></ProductItemBtn>
        </div>

    </div>
  )
}

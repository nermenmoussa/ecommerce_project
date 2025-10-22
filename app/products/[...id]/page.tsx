import getSingleProduct from '@/apis/singleProduct.api'
import { productInterface } from '@/app/_interfaces/product.interface'
import Image from 'next/image'
import React from 'react'
import ProductItemBtn from '../_components/ProductItemBtn'
import getProductsInCat from '@/apis/getProductsInCat.api'
import ProductItem from '../_components/ProductItem'

export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    const data = await getSingleProduct(id[0]) as productInterface
    const catProducts: productInterface[] = await getProductsInCat(id[1])
    if (!data || !catProducts) {
        return <div>product not found</div>
    }
    return (
        <div className='flex flex-wrap items-center m-auto'>
            <div className='w-full md:w-1/3 '>
                <Image width={300} height={300} src={data.imageCover} alt='' className='w-full'></Image>
            </div>
            <div className='w-full md:w-2/3 px-10  '>
                <h3>{data.title}</h3>
                <p className='text-gray-4'>{data.description}</p>

                <div className='flex justify-between  '>
                    <span>{data.price} EGP</span>
                    <span>{data.ratingsAverage}</span>
                </div>
                <div className='py-20'>
                    <ProductItemBtn id={data._id}></ProductItemBtn>
                </div>
            </div>
            <h2 className='my-5'>Related Product</h2>
            <div className='flex flex-wrap'>
                {catProducts?.map((prod: productInterface) => <ProductItem key={prod._id} prod={prod}></ProductItem>)}
            </div>
        </div>
    )
}

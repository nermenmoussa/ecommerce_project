'use client'

import addProduct from '@/app/cart/_actions/addProduct.action'
import { Button } from '@/components/ui/button'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import React from 'react'
import { toast } from 'react-toastify'

export default function ProductItemBtn({id}:{id:string}) {
  const queryClient=useQueryClient()
  const {mutate,isPending}=useMutation
  ({
    mutationFn:addProduct,
    onSuccess:(data)=>{
      queryClient.invalidateQueries({queryKey:['cart']})
      toast(data?.message)
    },
    onError:()=>{
      toast.error('Login First')
    }

  }
    
  )

  return (
    <Button onClick={()=>mutate(id)} className='w-full' >{isPending?<i className='fa-solid fa-spin fa-spinner'></i>:'Add To Cart'}</Button>
  )
}

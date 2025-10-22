
'use client'

import { checkOutSchema, checkOutSchemaForm } from '@/app/schema/checkOut.schema'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from "@/components/ui/form"
import { checkOutOnline } from '../actions/checkOut.action'
import { Button } from '@/components/ui/button'

export default function CheckOut({cartId}:{cartId:string}) {
    const form=useForm<checkOutSchemaForm>({
        resolver:zodResolver(checkOutSchema),
        defaultValues:{
         details:'',
         city:'',
         phone:''
        }
    })

  async function onSubmit(data:checkOutSchemaForm){
    const shippingAddress=data
    const res= await checkOutOnline({cartId,url:'',shippingAddress})
  
    if(res?.status ==='success')
        window.location.href=res?.session?.url

  }

  return (
    <Form {...form}>
        <form className='w-2/3 mx-auto my-5' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
         control={form.control}
         name='details'
         render={({field})=>(
            <FormItem className='my-3'>
                <FormLabel>details</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         )}
         />
        <FormField
         control={form.control}
         name='city'
         render={({field})=>(
            <FormItem className='my-3'>
                <FormLabel>city</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         )}
         />
        <FormField
         control={form.control}
         name='phone'
         render={({field})=>(
            <FormItem className='my-3'>
                <FormLabel>phone</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
         )}
         />

          <Button type='submit' className='bg-main text-white my-5 ml-auto block cursor-pointer hover:placeholder-gray-100'>Submit</Button>
               

        </form>

    </Form>
  )
}

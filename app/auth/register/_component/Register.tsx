'use client'
import { registerSchema, registerSchemaForm } from '@/app/schema/register.schema'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'



export default function Register() {
    const form = useForm<registerSchemaForm>(
        {
            resolver:zodResolver(registerSchema),
            defaultValues:{
                name:'',
                email:'',
                password:'',
                rePassword:'',
                phone:''

            }
        }
    )

    function onSubmit(data:registerSchemaForm){
        console.log(data)

    }

    return (
        <>
            <h2 className='px-10 '>Register Now : </h2>
            <Form {...form}>
                <form  className='w-2/3 mx-auto ' onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel  >Name</FormLabel>
                                <FormControl>
                                   <Input  {...field}></Input>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel >E_mail</FormLabel>
                                <FormControl>
                                   <Input  {...field}></Input>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel >password</FormLabel>
                                <FormControl>
                                   <Input type='password' autoComplete='off' {...field}></Input>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rePassword"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel >rePassword</FormLabel>
                                <FormControl>
                                   <Input type='password' autoComplete='off' {...field}></Input>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel >phone</FormLabel>
                                <FormControl>
                                   <Input type='phone' {...field}></Input>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                <Button  className='bg-main text-white my-5 ml-auto block cursor-pointer hover:placeholder-gray-100'>Register</Button>
                </form>

            </Form>
        </>
    )
}

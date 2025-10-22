'use client'

import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, loginSchemaForm } from '@/app/schema/login,schema'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'


export default function Login() {
    const form = useForm<loginSchemaForm>(
        {
            resolver: zodResolver(loginSchema),
            defaultValues:{
                email:'',
                password:''
            }
            
        }
    )

    function handleGitHubSignIn(){
        signIn('github',{
            callbackUrl:'/'
        })
    }

    const firstError = Object.keys(form.formState.errors)[0]
    async function onSubmit(data: loginSchemaForm) {
        const res=await signIn('credentials',{
            email:data.email,
            password:data.password,
            redirect:false,
            callbackUrl:'/'

        })
      if(res?.ok){
        window.location.href=res?.url || "/"
      }
      else{
        console.log(res?.error)
      }
        form.reset()
    }
    return (
        <>
            <h2 className='px-10 '>Login Now : </h2>
            <Form {...form}>
                <form className='w-2/3 mx-auto ' onSubmit={form.handleSubmit(onSubmit)} >

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel  >Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field}></Input>
                                </FormControl>
                                {firstError === 'email' &&
                                    <FormMessage />}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className='my-5'>
                                <FormLabel  >password</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field}></Input>
                                </FormControl>
                                {firstError === 'password' &&
                                    <FormMessage />}
                            </FormItem>
                        )}
                    />
                    <Button className='bg-main my-5 ml-auto block'>Login</Button>
                </form>
            </Form>
            <div className='text-center'>
            <Button onClick={handleGitHubSignIn} >Login with GitHub <i className='fa-brands fa-github'></i></Button>
            </div>
        </>
    )
}

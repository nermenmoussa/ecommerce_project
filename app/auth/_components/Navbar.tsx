'use client'

import Link from 'next/link'

import imglogo from '../../assets/images/freshcart-logo.svg'
import Image from "next/image";
import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { CartResponse } from '@/app/cart/typeScript/cartInterface';

export default function Navbar() {
    const { data } = useQuery<CartResponse>({
        queryKey: ['cart'], queryFn: async () => {
            const res = await fetch('/api/cart')
            const payload = await res.json()
            return payload
        }
    })
    const links = [
        { path: '/', element: 'home' },
        // { path: '/category', element: 'category' },
        { path: '/cart', element: 'cart' },

    ]
    const auth = [
        { path: '/auth/login', element: 'login' },
        { path: '/auth/register', element: 'register' },
    ]
    const [isOpen, setOpen] = useState(true)

    const { data: session, status } = useSession()
    console.log('SESSION:', session)
    console.log('STATUS:', status)

    function HandleLogout() {
        signOut({ callbackUrl: '/' })
    }


    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap gap-5  justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={imglogo} className="h-8" alt="Flowbite Logo" />

                </Link>
                <button onClick={() => setOpen(!isOpen)} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`${isOpen && 'hidden'} w-full md:flex justify-between`} id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg gap-5 bg-gray-50  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {links.map(link => <li key={link.path}>
                            <Link href={link.path} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{link.element.toUpperCase()}</Link>
                        </li>)}


                    </ul>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 gap-5 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li><i className='fa-brands fa-facebook'></i></li>
                        <li><i className='fa-brands fa-twitter'></i></li>
                        <li><i className='fa-brands fa-google'></i></li>
                        {status === "unauthenticated" ? <>{auth.map(link => <li key={link.path}>
                            <Link href={link.path} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">{link.element.toUpperCase()}</Link>
                        </li>)}

                        </> :
                            <>
                                <li>
                                    <Link href={'/cart'} className='relative flex items-center'>
                                        <i className='fa-solid fa-cart-shopping text-xl'></i>
                                        <span className='absolute -top-2 -right-3 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center'>
                                            {data?.numOfCartItems || 0}
                                        </span>
                                    </Link>
                                </li>
                                <li onClick={HandleLogout} className='cursor-pointer'>LOGOUT</li>
                                <li>HI {session?.user?.name}</li>
                                {session?.user?.image && <li><img className='rounded-full size-[20px]' src={session?.user?.image}></img></li>}

                            </>}



                    </ul>
                </div>
            </div>
        </nav>


    )
}

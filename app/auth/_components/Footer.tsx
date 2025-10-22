import React from 'react'
import imgFooter from '../../assets/images/freshcart-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
   

<footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={imgFooter} className="h-8" alt="Flowbite Logo" />

                </Link>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 . All Rights Reserved.</span>
  </div>
</footer>



  )
}

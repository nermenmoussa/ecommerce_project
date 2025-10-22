

import React from 'react'
import CheckOut from '../_component/CheckOut'


export default async function page({params}:{params:Promise<{id:string}>}) {
const data = await params
  return (
    <div><CheckOut cartId={data?.id}></CheckOut></div>
  )
}

import * as z from 'zod'

import React from 'react'

export const registerSchema=z.object(
    {
        name:z.string().nonempty('this field is required').min(2,'min char is 2').max(10,'max char is 10'),
        email:z.string().nonempty('this field is required').email('Not valid email'),
        password:z.string().nonempty('this field is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'not valid passwor'),
        rePassword:z.string().nonempty('this field is required'),
        phone:z.string().nonempty('this field is required').regex(/^(002)?(01)[0-25]\d{8}$/)

    }
).refine((data)=> data.password===data.rePassword ,
{
    path:['rePassword'],
    message:'the password not matched',
})

export type registerSchemaForm =z.infer<typeof registerSchema>

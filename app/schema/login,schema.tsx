import * as z from 'zod'


export const loginSchema =z.object(
    {
        email:z.string().nonempty('this field is required').email('this email not available'),
        password:z.string().nonempty('this field is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'not valid passwor'),
    }
)

export type loginSchemaForm =z.infer<typeof loginSchema>
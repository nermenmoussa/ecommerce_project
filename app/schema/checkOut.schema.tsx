import * as z from 'zod'


export const checkOutSchema =z.object(
    {
        details:z.string(),
        city:z.string(),
        phone:z.string(),
    }
)

export type checkOutSchemaForm =z.infer<typeof checkOutSchema>
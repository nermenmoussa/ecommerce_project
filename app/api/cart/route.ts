

import { getToken } from "next-auth/jwt";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest) {
const token =await getToken({req})
if(!token)
    return NextResponse.json({status:401,error:'unauthorized'})
const res = await fetch( `${process.env.API}/cart`,{
    headers:{
        token:token.token}
})
const payload =await res.json()
return NextResponse.json(payload)
    
}
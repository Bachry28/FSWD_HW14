import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import type { User } from "@prisma/client";

const prisma = new PrismaClient();
export const DELETE = async(request : Request, {params}: {params: {id : string}}) =>{
    
    const user = await prisma.user.delete({
        where: {
            id: Number (params.id)
        }
      
    })

return NextResponse.json(user, {status: 200});
}
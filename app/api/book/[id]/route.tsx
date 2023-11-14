import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import type { Book } from "@prisma/client";

const prisma = new PrismaClient();
export const DELETE = async(request : Request, {params}: {params: {id : string}}) =>{
    
    const book = await prisma.book.delete({
        where: {
            id: Number (params.id)
        }
      
    });

return NextResponse.json(book, {status: 200});
}
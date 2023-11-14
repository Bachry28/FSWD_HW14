import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import type { Book } from "@prisma/client"
const prisma = new PrismaClient();
export const POST = async(request : Request) =>{
    const body : Book = await request.json();
    const book = await prisma.book.create({
         data:{
            title : body.title,
            author : body.author,
            publisher : body.publisher,
            year : body.year,
            pages : body.pages,
            image: body.image
         }
    })

return NextResponse.json(book, {status: 201});
}
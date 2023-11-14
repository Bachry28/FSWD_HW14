import { PrismaClient } from "@prisma/client"
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
const prisma = new PrismaClient();


const getBook = async() =>{
    const res= await prisma.book.findMany({
        select:{
            id: true,
            title: true,
            author: true,
            publisher:true,
            year: true,
            pages:true,
            image:true
        }
    });
    return res; 
};

const Book = async () =>{
    const book = await getBook();
  
    return(
      <div>
        <div className="mb-2">
            <AddBook/>
        </div>
        <table className="table w-full">
        <thead>
            <tr>
                <th>#</th>
                <th>title</th>
                <th>author</th>
                <th>publisher</th>
                <th>year</th>
                <th>pages</th>
                <th>image</th>
                <th className="text-center">action</th>

            </tr>
        </thead>
        <tbody>
            {book.map((book, index)=>(
                 <tr key={book.id}>
                 <td>{index + 2}</td>
                 <td>{book.title}</td>
                 <td>{book.author}</td>
                 <td>{book.publisher}</td>
                 <td>{book.year}</td>
                 <td>{book.pages}</td>
                 <td>{book.image}</td>

                 <td>
               
                    <DeleteBook book={book}/></td>
            
             </tr>
            ))}
        </tbody>
      </table></div>
    )
  }

  
  export default Book 
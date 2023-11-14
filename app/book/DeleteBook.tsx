"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Book = {
    id: number;
    title: string;
    author: string;
    publisher: string;
    year: number;
    pages: number,
    image: string,
  
}
const DeleteBook = ({book}: {book:Book}) =>{

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleDelete = async (bookId: number) =>{
        await axios.delete(`/api/book/${bookId}`)
       router.refresh();
        setIsOpen(false);
    };
    const handleModal =()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button className="btn btn-error btn-sm" onClick={handleModal}>Delete
            </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure Deleted this Book {book.title} ?</h3>
           
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>No</button>
                    <button type="button" onClick={()=>handleDelete(book.id)} className="btn btn-primary">Yes</button>
                </div>
         
        </div>
        </div>
      </div>
    )
  }
  export default DeleteBook
"use client";
import { useState,SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddBook = () =>{

    const [title, setTitle]= useState("");
    const [author, setAuthor]= useState("");
    const [publisher, setPublisher]= useState("");
    const [year, setYear]= useState("");
    const [pages, setPages]= useState("");
    const [image, setImage]= useState("");
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e : SyntheticEvent) =>{
        e.preventDefault();
        await axios.post('/api/book',{
            title: title,
            author : author,
            publisher : publisher,
            year : year,
            pages : pages,
            image : image,

        })
        setTitle("");
        setAuthor("");
        setPublisher("");
        setYear("");
        setPages("");
        setImage("")
        router.refresh();
        setIsOpen(false);
    };
    const handleModal =()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button className="btn" onClick={handleModal}>Add Book</button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">Add Book</h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-control w-full">
                    <label className="label font-bold">Book Form Add</label>
                    <input 
                    type="text" 
                    value={title}
                    onChange= {(e)=> setTitle(e.target.value)}
                    className="input input-bordered"
                    placeholder="Title" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Author</label>
                    <input 
                    type="text" 
                    value={author}
                    onChange= {(e)=> setAuthor(e.target.value)}
                    className="input input-bordered"
                    placeholder="Author" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Publisher</label>
                    <input 
                    type="text" 
                    value={publisher}
                    onChange= {(e)=> setPublisher(e.target.value)}
                    className="input input-bordered"
                    placeholder="Publisher" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Year</label>
                    <input 
                    type="number" 
                    value={year}
                    onChange= {(e)=> setYear(e.target.value)}
                    className="input input-bordered"
                    placeholder="Year" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Pages</label>
                    <input 
                    type="number" 
                    value={pages}
                    onChange= {(e)=> setPages(e.target.value)}
                    className="input input-bordered"
                    placeholder="Pages" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Image</label>
                    <input 
                    type="text" 
                    value={image}
                    onChange= {(e)=> setImage(e.target.value)}
                    className="input input-bordered"
                    placeholder="Image" 
                    />
                </div>
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
        </div>
      </div>
    )
  }
  export default AddBook 
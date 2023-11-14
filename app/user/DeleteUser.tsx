"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}
const DeleteUser = ({user}: {user:User}) =>{

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleDelete = async (userId: number) =>{
        await axios.delete(`/api/user/${userId}`)
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
            <h3 className="font-bold text-lg">Are You Sure Deleted this Data {user.name} ?</h3>
           
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleModal}>No</button>
                    <button type="button" onClick={()=>handleDelete(user.id)} className="btn btn-primary">Yes</button>
                </div>
         
        </div>
        </div>
      </div>
    )
  }
  export default DeleteUser 
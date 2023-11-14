"use client";
import { useState,SyntheticEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddUser = () =>{

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e : SyntheticEvent) =>{
        e.preventDefault();
        await axios.post('/api/user',{
            name: name,
            email : email,
            password : password,
        })
        setName("");
        setEmail("");
        setPassword("");
        router.refresh();
        setIsOpen(false);
    };
    const handleModal =()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button className="btn" onClick={handleModal}>Add User</button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
            <h3 className="font-bold text-lg">User Login</h3>
            <form onSubmit={handleSubmit}> 
                <div className="form-control w-full">
                    <label className="label font-bold">User Name</label>
                    <input 
                    type="text" 
                    value={name}
                    onChange= {(e)=> setName(e.target.value)}
                    className="input input-bordered"
                    placeholder="User Name" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Email</label>
                    <input 
                    type="text" 
                    value={email}
                    onChange= {(e)=> setEmail(e.target.value)}
                    className="input input-bordered"
                    placeholder="Email" 
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label font-bold">Password</label>
                    <input 
                    type="text" 
                    value={password}
                    onChange= {(e)=> setPassword(e.target.value)}
                    className="input input-bordered"
                    placeholder="Password" 
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
  export default AddUser 
import { PrismaClient } from "@prisma/client"
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
const prisma = new PrismaClient();


const getUser = async() =>{
    const res= await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email:true,
            password: true,
        }
    });
    return res; 
};

const User = async () =>{
    const user = await getUser();
  
    return(
      <div>
        <div className="mb-2">
            <AddUser/>
        </div>
        <table className="table w-full">
        <thead>
            <tr>
                <th>#</th>
                <th>nama</th>
                <th>email</th>
                <th>password</th>
                <th className="text-center">action</th>

            </tr>
        </thead>
        <tbody>
            {user.map((user, index)=>(
                 <tr key={user.id}>
                 <td>{index + 1}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.password}</td>

                 <td>
                    <DeleteUser user={user}/></td>
             </tr>
            ))}
           
        </tbody>
      </table></div>
    )
  }

  
  export default User 
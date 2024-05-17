import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/reducer/userSlice';
const Show = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const handleDelete= (userId) =>{
    dispatch(deleteUser(userId))
  }

  return (
    <div className='pl-10 pt-10 h-screen w-screen bg-red-200 flex flex-wrap gap-10 '>
        <ul >
          {users.map(user => (
            <li className=' h-fit w-fit p-5 rounded-lg bg-slate-400 text-white text-2xl' key={user.id}>
              id: {user.id}<br /> Name: {user.name}<br /> Email: {user.email}<br /> Contact: {user.contact}
              <br /><button className='h-fit w-fit bg-slate-500 rounded-lg text-xl p-2 mt-4' onClick={() => handleDelete(user.id)}>Delete</button>

            </li>           
          ))}

        </ul>
    </div>
  );
};

export default Show;

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, contact }));
    navigate('/show');
  };

  return (
    <div className='flex justify-center'>
      <div className='h-[300px] w-[300px] rounded-lg bg-slate-500 mt-20'>
        <h1 className='text-2xl text-center mt-3 text-white font-semibold underline'>Registration Form</h1>
        <form className='flex-col pl-10 mt-5' onSubmit={submitHandler}>
        <input
          className='border-lime-300 border-2 rounded-lg ml-3'
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='border-lime-300 rounded-lg border-2 mt-3 ml-3'
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border-lime-300 border-2 mt-3 ml-3'
          value={contact}
          type="contact"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
        /><br />
        <button type="submit" className='h-8 w-24 border-2 bg-slate-600 text-white mt-3 ml-3 rounded-lg'>Submit</button>
      </form>
      </div>
      
    </div>
  );
};

export default Register;

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
    <div>
      <form className='flex-col pl-10 mt-5' onSubmit={submitHandler}>
        <input
          className='border-lime-300 border-2'
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='border-lime-300 border-2'
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border-lime-300 border-2'
          value={contact}
          type="contact"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit" className='h-8 w-14 border-2 bg-slate-600 text-white'>Submit</button>
      </form>
    </div>
  );
};

export default Register;

import React,{useState} from "react";

import {Inertia} from '@inertiajs/inertia'

const Create = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/user/register', { name, email, password });
  }
  
  return (
      <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="border py-4 px-6 space-y-3 min-w-xl">
              <h2 className="font-bold my-3 text-4xl">Register New User</h2>
              <input
                  type="text"
                  className="block p-3 w-full"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <input
                  type="text"
                  className="block p-3 w-full"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  className="block p-3 w-full"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button className="py-2 px-4 bg-blue-400 text-white">
                  Register
              </button>
          </form>
      </div>
  );
}
 


export default Create;
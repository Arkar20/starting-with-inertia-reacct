import React,{useState} from "react";

import {Inertia} from '@inertiajs/inertia'
import { usePage } from "@inertiajs/inertia-react";

const Create = () => {

    const { errors } = usePage().props;


  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/user/register', { name, email, password });
  }
  
  return (
      <div className="flex justify-center items-center min-h-screen">
          <form
              onSubmit={handleSubmit}
              className="border py-4 px-6 space-y-3 min-w-xl"
          >
              <h2 className="font-bold my-3 text-4xl">Register New User</h2>
              <input
                  type="text"
                  className="block p-3 w-full"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
              <input
                  type="text"
                  className="block p-3 w-full"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span  className="text-red-600 text-xs">{errors.email}</span>}

              <input
                  type="password"
                  className="block p-3 w-full"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="text-red-600 text-xs">{errors.password}</span>}

              <button className="block py-2 px-4 bg-blue-400 text-white">
                  Register
              </button>
          </form>
      </div>
  );
}
 


export default Create;
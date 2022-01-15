import React from "react"
import { useForm } from "@inertiajs/inertia-react";
const Login = () => {

  const { data, setData, post, progress, errors } = useForm({
      email: "",
      password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    post('/login');
    
  }

  return (
      <form
          onSubmit={handleLogin}
          className="flex justify-center items-center min-h-screen"
      >
          <div className="p-5 border border-1 space-y-4">
              <h1 className="text-3xl">Login page</h1>
              <input
                  type="text"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  placeholder="enter your email"
                  className="block w-full py-2 border border-1 border-grey-400"
              />
              {errors.email && (
                  <span className="text-red-600 text-xs">{errors.email}</span>
              )}
              <input
                  type="password"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  placeholder="enter your password"
                  className="block w-full px-4  py-2 border border-1 border-gray-400"
              />

              <button type="submit">Login</button>
          </div>
      </form>
  );
}
export default Login;
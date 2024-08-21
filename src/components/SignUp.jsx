import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      navigate('/home'); 
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D')" }}>
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" name="name" placeholder="Name" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <input type="text" name="username" placeholder="Username" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-black border focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Email" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-black border focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <input type="password" name="password" placeholder="Password" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-black border focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-6">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-black border focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit"
            className=" bg-green-700 py-2 px-4 justify-center font-bold py-3 rounded-md transition duration-300 ">
            Create
          </button>
        </form>
        <p className="text-center mt-4 text-black">
          Already have an account? <button onClick={() => navigate('/login')} className=" text-green-500 ">Sign In</button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
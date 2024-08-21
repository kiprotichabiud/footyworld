import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://project-management-db.vercel.app/users');
      const users = await response.json();
      const user = users.find(u => u.username === credentials.username && u.password === credentials.password);

      if (user) {
    
        navigate('/projects');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('')" }}>
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              required 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required 
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-800 border focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
          </div>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-white">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-green-400">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
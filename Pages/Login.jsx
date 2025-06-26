import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [logID, setLogID] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (logID === 'a53451c7-d91b-4912-a812-bddae9aa4341') {
      alert("log created successfully");
      navigate("/");
    } else {
      setError("Invalid Login ID");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your Login ID"
          value={logID}
          onChange={(e) => setLogID(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
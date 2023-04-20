import React, { useEffect, useState } from 'react';
import { ApiClient } from '../api/services';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const apiClient = new ApiClient();

  const handleChange = ( e ) => {
    const { id, value } = e.target;
    setFormData({...formData, [id]: value,});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const login = await apiClient.login(formData);
      localStorage.setItem('token',login?.data?.token);
    } catch (error) {
      
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <h1 className='text-center'>Login con cambios</h1>
        <div className='col-4'>
          <form className='mt-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email </label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" onChange={handleChange} minLength={6} maxLength={12} required/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

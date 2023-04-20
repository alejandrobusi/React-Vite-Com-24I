import React from 'react';
import { ApiClient } from '../api/services';

const HomePage = () => {
  const apiClient = new ApiClient();

  const getUsers = async () => {
    try {
      const resp = await apiClient.getUsers();
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{height: '73vh', textAlign:'center'}}>
      <button className='btn btn-primary' onClick={() => getUsers()}>Obtener usuarios</button>
    </div>
  )
}

export default HomePage

import axios from 'axios';

const token = localStorage.getItem('token');

export class ApiClient {
    client;
    constructor(){
      this.client = axios.create(
        {
          baseURL: import.meta.env.VITE_BASE_URL,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'access-token': token,
          }
        })
    }

    async getAllUsers() {
      return this.client.get('/users');
    }
    
    async createUser(userData) {
      return this.client.post(`/users`, userData);
    }

    async login(userData) {
      return this.client.post(`/login`, userData);
    }

    async getUsers() {
      return this.client.get(`/user/get-users`);
    }
}

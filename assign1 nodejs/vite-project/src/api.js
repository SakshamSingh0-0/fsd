import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Fetch data from backend
export const fetchData = () => API.get('/data');

// Fetch items list
export const fetchItems = () => API.get('/items');

// Submit data to backend
export const submitData = (data) => API.post('/submit', data);

// Health check
export const healthCheck = () => API.get('/health');

// System Information APIs
export const getTotalMemory = () => API.get('/system/total-memory');
export const getFreeMemory = () => API.get('/system/free-memory');
export const getUserInfo = () => API.get('/system/user-info');
export const getCpuArchitecture = () => API.get('/system/cpu-architecture');

export default API;

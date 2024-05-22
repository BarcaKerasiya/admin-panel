import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'https://d2gcgu77m9vqg6.cloudfront.net/api', // Replace with your API base URL
baseURL: 'http://localhost:5000/api',

  timeout: 5000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
    // You can add any default headers here
  },
});

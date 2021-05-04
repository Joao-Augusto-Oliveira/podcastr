import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.FAKE_API_URL || "http://localhost:3000/"
})
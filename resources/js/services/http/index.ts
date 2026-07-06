import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getRequest = (endpoint: string) => http.get(endpoint);
export const postRequest = <T,>(endpoint: string, data: T) => http.post(endpoint, data);
export const putRequest = <T,>(endpoint: string, data: T) => http.put(endpoint, data);
export const deleteRequest = (endpoint: string) => http.delete(endpoint);
import axios from 'axios';

console.log(process.env.API_COMMON_URL)
const AxiosRequest = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
AxiosRequest.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("jwtToken"); // Get token from localStorage or cookies
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        console.log('Request Sent:', config);
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);


// Response Interceptor
AxiosRequest.interceptors.response.use(
    (response) => {
        console.log('Response Received:', response);
        return response;
    },
    (error) => {
        console.error('Response Error:', error.response?.data || error.message);
        return Promise.reject(error.response?.data || error.message);
    }
);

export default AxiosRequest;

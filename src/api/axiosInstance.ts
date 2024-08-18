import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // 환경 변수로 백엔드 URL 설정
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
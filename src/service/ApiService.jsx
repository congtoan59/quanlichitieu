import axios from 'axios';

const API_Url =
    'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/';

const api = axios.create({
    baseURL: API_Url,
    timeout: 10000, // Thay đổi thời gian timeout nếu cần
    headers: {
        'Content-Type': 'application/json',
        // Thêm các header khác nếu cần
    },
});

export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const getData = async (endpont, data) => {
    try {
        const response = await api.get(endpont, data);
        return response.data;
    } catch (error) {
        console.error('Error getting data : ', error);
        throw error;
    }
};

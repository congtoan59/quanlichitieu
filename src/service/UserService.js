import axios from "axios";

export const loginApi = (email, password) => {
    return axios.post(
        'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Account.json',
        { email, password },
    );
};

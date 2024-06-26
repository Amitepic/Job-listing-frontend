import axios from "axios";
const backendUrl = `https://job-listing-2.onrender.com/api/v1`;

export const registerUser = async ({ email, password, mobile, name }) => {
    try {
        const reqUrl = `${backendUrl}/auth/register`;
        const response = await axios.post(reqUrl, {
            email,
            password,
            mobile,
            name,
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const reqUrl = `${backendUrl}/auth/login`;
        const response = await axios.post(reqUrl, {
            email,
            password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        return response.data.name;
    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
};

import api from "./axios.js";

export const registerUser = (data)=>{
    return api.post('/user/register',data);
};

export const verifyOtp = (data)=>{
    return api.post('/user/verify-otp',data);
};

export const login = (data)=>{
    return api.post('/user/login',data);
};

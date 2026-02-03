import React, { useState } from 'react'
import { verifyOtp } from '../api/authServices.js'
import './register.css';

const VerifyOtp = () => {
    const [otp,setOtp] = useState("");
    const [email,setEmail] = useState("");

    const handleVerify = async()=>{
        try{
            const res = await verifyOtp({email,otp});
            alert('User register successfully.!');
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div className='register-container'>
        <h2>Verify OTP</h2>
        <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='enter otp' onChange={(e)=>setOtp(e.target.value)}  />
        <button onClick={handleVerify}>Verify</button>
    </div>
  )
}

export default VerifyOtp
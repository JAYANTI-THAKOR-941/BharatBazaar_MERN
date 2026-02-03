import React, { useState } from 'react'
import './register.css'
import { registerUser } from '../api/authServices.js'

const Register = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await registerUser(form);
            alert('Otp send sent on your mail.!');
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className='register-container'>
            <h2>Register</h2>
           <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='Enter name'/>
            <input type="email" onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Enter Email'/>
            <input type="text" onChange={(e)=>setForm({...form,password:e.target.value})} placeholder='Enter Password'/>
            <button>Register</button>
           </form>
        </div>
    )
}

export default Register
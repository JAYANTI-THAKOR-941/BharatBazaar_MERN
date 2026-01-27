import User from "../models/User.js";
import transporter from "../config/sendOtp.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body; 
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            req.flash('error', 'Email already registered');
            return res.redirect('/register');
        }
        const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        const newUser = new User({ name, email, password, otp: generatedOtp });
        await newUser.save();
        
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"Email Verification Otp",
            html:`
                <h3>Your OTP for Email Verification is:</h3>
                <h1 style="font-weight:bold;">Your otp is : ${generatedOtp}</h1>      
            `,
        })

        req.flash('info','Otp sent successfully.!!');
        res.redirect('/verify');
    } catch (error) {
        console.error("Error during user registration:", error);
        res.redirect('/register');
    } 
};


export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            req.flash('error', 'User not found');
            return res.redirect('/verify');
        }
        if (user.otp === otp) {
            user.isVerified = true;
            user.otp = null;
            await user.save();
            req.flash('success', 'Email verified successfully. You can now log in.');
            res.redirect('/login');           
        }
        else {
            req.flash('error', 'Invalid OTP. Please try again.');
            res.redirect('/verify');
        }
    } catch (error) {
        console.error("Error during OTP verification:", error);
        res.redirect('/verify');
    }
};


export const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            req.flash('error','User not found. Please register first.');
            return res.redirect('/login');
        }
        if(!user.isVerified){
            req.flash('error','Email not verified. Please verify your email.');
            return res.redirect('/login');
        }
        if(user.password !== password){
            req.flash('error','Incorrect password. Please try again.');
            return res.redirect('/login');
        }
        req.session.userId = user._id;
        req.flash('success','Logged in successfully.');
        res.redirect('/dashboard');
    } catch (error) {
        console.error("Error during user login:", error);
        res.redirect('/login');
    }   
};
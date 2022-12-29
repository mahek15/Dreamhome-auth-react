import React, {useEffect, useState} from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {auth} from '../../firebase-config'
import { Link } from 'react-router-dom';

const Register = () => {
  const [registeremail,setRegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  const register = async () => {
    try{
    const user = await createUserWithEmailAndPassword(
      auth,
      registeremail,
      registerpassword);
    console.log(user);
    }catch(error){
      console.log(error.message);
    }
  }
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  })
  
//   const isPasswordConfirmed = (password,confimPassword) => {
//     if(password && confimPassword && password === confimPassword) 
//       return true;
//     return false;
// }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if(!isPasswordConfirmed(user.password,user.password_confirm)){
//         // password is not matching, you can show error to your user
//         return;
//     }


//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     // ... rest of the codes
// }

  return (
    <>
    <div className="min-h-[13rem] w-full">
            <div className="w-full h-64 relative">
                <img className="absolute inset-0 h-full w-full object-cover" src="/assets/subscribe.png" alt="" /> 
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75">
                </div>
                    <div className="flex h-full items-center justify-center relative">
                        <div className="text-white font-bold text-3xl text-center">
                            Account Register
                            <p className='font-light text-lg my-2'>Home | <span className='text-blue'>Register</span></p>
                        </div>
                    </div>
            </div>
    </div>
    <div className='shadow-xl w-[700px] mx-auto p-10 my-24'>
      <form action='' className='flex flex-col py-20'>
        <div className='mx-auto text-3xl pb-5 font-medium'>Create Your Account</div>
        {/* <div className='flex flex-col mx-auto pb-5'>
          <label htmlFor='email' className='text-[#333333] p-1'>Full Name</label>
          <input
          type= 'text'
          name = 'full name'
          id = 'name'
          autoComplete='off'
          value={name}
          placeholder = 'Full name'
          onChange = {(e) => setName(e.target.value)}
          className = 'border-solid border border-[#D3DEE8] p-2 w-[400px]'
          />
        </div> */}
        <div className='flex flex-col mx-auto pb-5'>
          <label htmlFor='email' className='text-[#333333] p-1'>Email</label>
          <input
          type= 'text'
          placeholder = 'Email'
          onChange = {(e) => setRegisterEmail(e.target.value)}
          className = 'border-solid border border-[#D3DEE8] p-2 w-[400px]'
          />
        </div>
        <div className='flex flex-col mx-auto pb-5'>
          <label htmlFor='password' className='text-[#333333] p-1'>Password</label>
          <input
          type= 'password'
          placeholder = 'Password'
          onChange = {(e) => setRegisterPassword(e.target.value)}
          className = 'border-solid border border-[#D3DEE8] p-2 w-[400px]'
          />
        </div>
        
        <button className='bg-blue text-white p-3 mx-auto w-[400px] text-center' onClick={register}>
          <Link to="/">Register Account </Link>
        </button>
        
      </form>
      </div>
      <h4> User Logged In: </h4>
      {user?.email}
    </>
  )
}

export default Register

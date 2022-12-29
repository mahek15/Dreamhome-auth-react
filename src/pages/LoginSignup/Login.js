import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase-config'

const Login = () => {
  const[loginemail,setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginemail,
        loginpassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
    <>
    <div className="min-h-[13rem] w-full">
            <div className="w-full h-64 relative">
                <img className="absolute inset-0 h-full w-full object-cover" src="/assets/subscribe.png" alt="" /> 
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75">
                </div>
                    <div className="flex h-full items-center justify-center relative">
                        <div className="text-white font-bold text-3xl text-center">
                            Account Login
                            <p className='font-light text-lg my-2'>Home | <span className='text-blue'>Login</span></p>
                        </div>
                    </div>
            </div>
    </div>
    <div className='shadow-xl w-[700px] mx-auto p-10 my-24'>
      <form action='' className='flex flex-col '>
        <div className='mx-auto text-3xl pb-5 font-medium'>Login Your Account</div>
        <div className='flex flex-col mx-auto pb-5'>
          <label htmlFor='email' className='text-[#333333] p-1'>Email</label>
          <input
          type= 'text'
          name = 'email'
          id = 'email'
          autoComplete='off'
          value={loginemail}
          placeholder = 'Email'
          onChange = {(e) => setLoginEmail(e.target.value)}
          className = 'border-solid border border-[#D3DEE8] p-2 w-[400px]'
          />
        </div>
        <div className='flex flex-col mx-auto pb-5'>
          <label htmlFor='password' className='text-[#333333] p-1'>Password</label>
          <input
          type= 'password'
          name = 'password'
          id = 'password'
          autoComplete='off'
          value={loginpassword}
          placeholder = 'Password'
          onChange = {(e) => setLoginPassword(e.target.value)}
          className = 'border-solid border border-[#D3DEE8] p-2 w-[400px]'
          />
        </div>
        <button className='bg-blue text-white p-3 mx-auto w-[400px] text-center ' onClick={login}>
          <Link to="/">Login account</Link>
        </button>
        <div className='flex flex-col mx-auto my-0 py-6 justify-start'>
          <p>You can also login with social network</p>
          <div className='flex space-x-4 pt-3'>
            <div className='bg-[#DD4B39] text-white px-5 py-3'>Google</div>
            <div className='bg-[#3B5999] text-white px-5 py-3'>Facebook</div>
            <div className='bg-blue text-white px-5 py-3'>Twitter</div>
          </div>
        </div>
        <div className='mx-auto my-0'>
        Don’t have account? <Link to='/signup' className='text-blue'>Sign Up</Link> 
        </div>
      </form>
      </div>
    </>
  )
}

export default Login

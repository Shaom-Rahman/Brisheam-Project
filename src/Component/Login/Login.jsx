import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import './Common.css'
import { Icon } from "@iconify/react";

const Login = () => {
  return (
    <>
    <section className='Login px-2 '>
        <div className="container">
            <div className="menuRow ">
                <div className="mainText">
                    <h1>WELCOME BACK! </h1>
                    <p> Don’t have a account, <span className='text-[#8699DA] font-medium'>Sign up </span> </p>
                    <form >
                        <p className='name' > Username</p>
                        <input className='input1' type='text' placeholder='deniel123@gmail.com'/>
                        <p className='pass' > Password</p>
                        <input className='input2' type='password' />
                        <div className="dot">
                        <Icon icon="lineicons:line-dotted" />
                        </div>
                        <div className="eye">
                            <FaEyeSlash  />
                        </div>
                        <div className='Others' >
                          <div className="remember ">
                            <div className="circle">
                            <Icon icon="formkit:radio" />
                            </div>
                            <p > Remember me</p>
                          </div>
                          <div className="forget">
                            <p > Forget password? </p>
                          </div>
                        </div>
                <div className="menuButton ">
                    <button > Sign In </button>
                </div>
                <div className="socialParts">
                    <div> 
                        <p > or continue with</p>
                    </div>
                    <div className="socialSite ">
                        <FcGoogle className='w-[120px] h-[80px] border-[2px] border-[#8699DA] p-[15px]
                         rounded-[8px] text-[25px] md:text-[48px]'/>
                        <BsFacebook className='w-[120px] h-[80px] border-[2px] border-[#8699DA] p-[15px]
                         rounded-[8px] text-[30px] md:text-[48px] text-[#8699DA]'/>
                        <FaApple className='w-[120px] h-[80px] border-[2px] border-[#8699DA] p-[15px]
                         rounded-[8px] text-[30px] md:text-[48px] text-[#444B59]'/>
                    </div>
                </div>
                    </form>
                </div>
                <div className="menuImage ">
                    <img src='Image/Image.png' alt='logo'/>
                </div>
            </div>
        </div>
    </section>
        
    </>
  )
}

export default Login
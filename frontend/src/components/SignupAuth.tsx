import {Link, useNavigate} from 'react-router-dom'
import { InputBox } from './InputBox'
import {SignupInput} from "@codewalker66/holocron-common"
import { useState } from 'react'
import axios from 'axios'
import {BACKEND_URL} from "../config"
 

export const SignupAuth = () =>{
    
    const [postInputs, setPostInput] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
    async function sendRequest(){
       try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
            const jwt = response.data.jwt
            localStorage.setItem('token', jwt)
            navigate("/blogs")
            
       }catch(e){
            console.log(e)
            alert(`Some error occurred`)
       }
    }
    return (<>
                  
        <div className="flex flex-col justify-center h-screen bg-white items-center">
            <div className="flex justify-center">
               <div>

                    <div className='px-10'>
                        <div className="text-3xl font-extrabold mb-1">Create a new account</div>
                        <div className="text-lg text-slate-500 mb-8">
                            Already have an account?
                            <Link to="/signin" className="underline cursor-pointer pl-1">Login</Link>
                        </div>   
                    </div> 

                    <div>
                        <div >
                            <InputBox label='Name' placeholder='Enter your name' onChange={(e) =>{
                                    setPostInput({
                                        ...postInputs,
                                        name:e.target.value
                                    })
                                }}/>  
                            <InputBox label='Email' placeholder='Enter your email' onChange={(e) =>{
                                    setPostInput({
                                        ...postInputs,
                                        email:e.target.value
                                    })
                                }}/>      
                            <InputBox label='Password' type='password' placeholder='Enter your password' onChange={(e) =>{
                                    setPostInput({
                                        ...postInputs,
                                        password:e.target.value
                                    })
                                }}/>         
                        </div> 
                    </div>

                    <div >
                        <button  onClick={sendRequest} type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signup</button>
                    </div>

               </div>
            </div>          

            
        </div>
    
    </>)
}
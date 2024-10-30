import {Link, useNavigate} from 'react-router-dom'
import { InputBox } from './InputBox'
import {SigninInput} from "@codewalker66/holocron-common"
import { useState } from 'react'
import axios from 'axios'
import {BACKEND_URL} from "../config"
 

export const SigninAuth = () =>{
    
    const [postInputs, setPostInput] = useState<SigninInput>({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    async function sendRequest(){
       try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
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
                        <div className="text-3xl font-extrabold mb-1">Login to your account</div>
                        <div className="text-lg text-slate-500 mb-8">
                            Dont't have an account?
                            <Link to= '/signup' className="underline cursor-pointer pl-1">Signup</Link>
                        </div>   
                    </div> 

                    <div>
                        <div >
                              
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
                        <button  onClick={sendRequest} type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                    </div>

               </div>
            </div>          

            
        </div>
    
    </>)
}
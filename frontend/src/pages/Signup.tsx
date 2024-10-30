
import { SignupAuth, Quote } from "../components"
export const Signup = () =>{
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div >
                <SignupAuth />
            </div>
            <div className="hidden md:block" >
                <Quote label=" The customer service I received was exceptional. The support team went above and beyond to address my concerns." author="Anaking SkyWalker" designation="Jedi Knight, Corosant"/> 
            </div>
        </div>
    </>
}
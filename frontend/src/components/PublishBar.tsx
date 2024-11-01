import {Link} from 'react-router-dom'
import { Avatar } from "./Avatar";

interface AppBarProps {
    name: string;
}

export const PublishBar = ({ name }: AppBarProps) => {
    return (
        <>
            <div className="flex items-center rounded-lg bg-slate-100 justify-between p-2 shadow-lg">
                
                <Link to={`/blogs`}>
                    <div className="font-bold text-4xl  flex items-center m-2 font-serif transition-transform duration-300 hover:translate-y-[-4px] hover:scale-105 cursor-pointer">
                        <span className="bg-gradient-to-r from-emerald-600 to-blue-800 bg-clip-text text-transparent">
                            Holocron
                        </span>
                    </div>
                </Link>
                
            
                <div className="flex items-center flex-grow mx-2">
                    <div className="flex-grow text-sm">
                        Draft in {name}
                    </div>
                    

                    <div className="flex-none m-2">
                    <div className="flex flex-row items-center hover:scale-110 transition-transform duration-300 cursor-pointer ">
                            
                            <div className="flex items-center justify-center">
                            <svg className="w-5 h-5 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notification">
                              <path d="M22.086 14.672A3.685 3.685 0 0 1 21 12.05V9A9 9 0 0 0 3 9v3.05a3.685 3.685 0 0 1-1.086 2.622A3.121 3.121 0 0 0 4.121 20H7.1a5 5 0 0 0 9.8 0h2.98a3.121 3.121 0 0 0 2.207-5.328ZM12 22a3 3 0 0 1-2.816-2h5.632A3 3 0 0 1 12 22Zm7.879-4H4.121a1.121 1.121 0 0 1-.793-1.914A5.672 5.672 0 0 0 5 12.05V9a7 7 0 0 1 14 0v3.05a5.672 5.672 0 0 0 1.672 4.036A1.121 1.121 0 0 1 19.879 18Z"></path>
                            </svg>
                            </div>
                                                      
                        </div>
                    </div>
                    <div className="flex-none m-2">
                        <Avatar name={name}/>
                    </div>
                </div>
            </div>
        </>
    );
};

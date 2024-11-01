import { SearchBar } from "./SearchBar";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

interface AppBarProps {
    name: string;
}

export const AppBar = ({ name }: AppBarProps) => {
    return (
        <>
            <div className="flex items-center justify-between p-2 bg-white shadow-md">
                
                <Link to={`/blogs`}>
                    <div className="font-bold text-4xl flex items-center m-2 font-serif transition-transform duration-300 hover:translate-y-[-4px] hover:scale-105 cursor-pointer">
                        <span className="bg-gradient-to-r from-emerald-600 to-blue-800 bg-clip-text text-transparent">
                            Holocron
                        </span>
                    </div>
                </Link>
                
            
                <div className="flex items-center flex-grow mx-2">
                    <div className="flex-grow">
                        <SearchBar />
                    </div>
                    <div className="flex-none m-2">
                        <Link to={"/publish"}>
                            <div className="flex flex-row items-center hover:scale-110 transition-transform duration-300 cursor-pointer ">
                                
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 opacity-70"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        id="write"
                                        aria-label="Write"
                                    >
                                        <path d="M25,21h2v5a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V6A3,3,0,0,1,5,3H24a3,3,0,0,1,3,3V7.15H25V6a1,1,0,0,0-1-1H5A1,1,0,0,0,4,6V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1Zm5.34-8.84a3,3,0,0,1-.88,2.13l-1.59,1.58L20.3,23.45a1,1,0,0,1-.57.28l-3.3.48h-.15a1,1,0,0,1-.7-.3,1,1,0,0,1-.29-.85l.48-3.3a1,1,0,0,1,.28-.57l7.58-7.57L25.21,10a3.09,3.09,0,0,1,4.25,0A3,3,0,0,1,30.34,12.16Zm-4.59,3-1.41-1.41L17.7,20.38,17.46,22l1.66-.24Zm2.59-3a1,1,0,0,0-.3-.7,1,1,0,0,0-1.41,0l-.88.88,1.41,1.41.88-.88A1,1,0,0,0,28.34,12.16ZM14,24V22H7v2Z"></path>
                                    </svg>
                                </div>
                                
                                <div className="text-sm  ml-2 text-slate-600 font-semibold">
                                    Write
                                </div>
                            </div>
                        </Link>
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

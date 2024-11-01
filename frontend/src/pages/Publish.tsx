import { useState } from "react";
import { PublishBar } from "../components";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title: title,
                content: content
            }, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            navigate(`/blog/${response.data.id}`); // Navigate to the new blog post
        } catch (error) {
            console.error("Error publishing blog:", error);
        }
    };

    return (
        <>
            <PublishBar name="Prateek" />
            <form onSubmit={handleSubmit}>
                <div className="min-h-screen px-4 py-8 bg-gray-200 flex flex-col items-center">
                    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                        
                        <input 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title" 
                            className="w-full text-3xl font-sans font-bold border-b border-gray-300 p-2 outline-none focus:border-gray-400 mb-6"
                        />
                        
                        <textarea 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your story..." 
                            className="w-full h-96 font-thin text-lg p-2 outline-none resize-none focus:ring-0 focus:border-gray-400 bg-transparent"
                        />
                    </div>
                </div>
                
                <div className="flex justify-center fixed bottom-4 left-0 right-0">
                    <button 
                        type="submit" 
                        className="text-white bg-gradient-to-r from-emerald-600 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </>
    );
};

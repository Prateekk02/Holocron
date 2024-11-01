import { useEffect, useState } from "react";
import axios from "axios"; 
import { BACKEND_URL } from "../config";

export interface BlogProps {
    content: string;
    title: string;
    id: string;
    author: {
        name: string;
    };
}

export const useBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogProps>();
    
    console.log('Token:', localStorage.getItem('token'));

    useEffect(() => {
        // Define an async function within the useEffect
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem('token') || ''
                    }
                });
                setBlog(res.data.post);
            } catch (e) {
                console.error("Error fetching blogs:", e);
            } finally {
                setLoading(false);
            }
        };

        // Immediately invoke the async function
        fetchBlogs();
    }, [id]);

    return {
        loading,
        blog
    };
};

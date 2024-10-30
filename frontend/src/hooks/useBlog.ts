import { useEffect, useState } from "react";
import axios from "axios"; 
import { BACKEND_URL } from "../config";

interface Blog {
    content: string;
    title: string;
    id: string;
    author: {
        name: string;
    };
}

export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    console.log('Token:', localStorage.getItem('token'));

    useEffect(() => {
        // Define an async function within the useEffect
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: localStorage.getItem('token') || ''
                    }
                });
                setBlogs(res.data.posts);
            } catch (e) {
                console.error("Error fetching blogs:", e);
            } finally {
                setLoading(false);
            }
        };

        // Immediately invoke the async function
        fetchBlogs();
    }, []);

    return {
        loading,
        blogs
    };
};

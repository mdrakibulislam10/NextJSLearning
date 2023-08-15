import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState({});

    const router = useRouter();
    const { id } = router.query;
    // console.log(id);

    useEffect(() => {
        const n = async () => {
            const res = await fetch("http://localhost:3000/api/dashboard");
            const data = await res.json();
            // console.log("API Response:", data);
            setBlogs(data);
        };
        n();
    }, [id])

    // console.log(blogs && blogs);

    useEffect(() => {
        if (id && blogs.length > 0) {
            const foundBlog = blogs.find(blog => blog.id === parseInt(id));
            if (foundBlog) {
                setBlog(foundBlog);
            }
        }
    }, [id, blogs]);
    // console.log(blog);

    return (
        <div>
            <h4>Blog No: {blog.id}</h4>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default Blog;

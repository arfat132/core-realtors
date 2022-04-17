import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <section id='#services' className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
            <h1 className='text-center text-blue-900 uppercase text-3xl font-bold my-8'>My Blogs<div className='w-24 h-1 bg-blue-900 rounded-lg mx-auto mt-2'></div></h1>
            <div className="flex flex-wrap -m-4">
               
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>)
              }
               
            </div>
        </div>
    </section>
    );
};

export default Blogs;
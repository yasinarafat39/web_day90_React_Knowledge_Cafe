import { useEffect } from "react"
import { useState } from "react"
import Blog from "./Blog/Blog"


export default function Blogs(){
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:col-span-2"> 
           
            {
                blogs.map((blog, index) => <Blog
                key={index}
                blog={blog}
                ></Blog>)
            }
        </div>
    )
}
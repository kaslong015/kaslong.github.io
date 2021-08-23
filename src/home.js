import { useState  } from "react";

const Home = () => {
    
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'i love react',author:'mario',id:1},
        {title:'welcome party',body:'i ove welcome party',author:'yoshi',id:2},
        {title:'web dev top tips',body:'learn web dev the right way',author:'kaslong',id:3}
    ])
 

    return (  
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}                      
        </div>
    );
}
 
export default Home;
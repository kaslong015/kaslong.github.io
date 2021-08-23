import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {

   
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'i love react',author:'mario',id:1},
        {title:'welcome party',body:'i ove welcome party',author:'yoshi',id:2},
        {title:'web dev top tips',body:'learn web dev the right way',author:'kaslong',id:3}
    ])

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={blogs} title={"all blogs!!"} handleDelete={handleDelete}/>              
        </div>
    );
}
 
export default Home;
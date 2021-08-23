import { useState  } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'i love react',author:'mario',id:1},
        {title:'welcome party',body:'i ove welcome party',author:'yoshi',id:2},
        {title:'web dev top tips',body:'learn web dev the right way',author:'kaslong',id:3}
    ])
 

    return (  
        <div className="home">
            <BlogList blogs={blogs}/>                  
        </div>
    );
}
 
export default Home;
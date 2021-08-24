import { useState, useEffect  } from "react";
import BlogList from "./BlogList";

const Home = () => {

   
    const [blogs,setBlogs] = useState(null)

    
    useEffect(() => {
        // console.log('useeffect ran')
        fetch("http://localhost:4000/blogs")
            .then(res => {
                return res.json()
            }).then((data)=>{
                console.log(data)
                setBlogs(data)
            }).catch((error)=> error.message)
        
    },[])

    return (  
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={"all blogs!!"}/> } 
           
        </div>
    );
}
 
export default Home;
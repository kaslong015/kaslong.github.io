import { useState  } from "react";

const Home = () => {
    const [name,setName] = useState('kevin')

    const [age,setAge] = useState(30)
    
    const handleClick = ()=>{
        setName('kaslong')
        setAge(50)
    }

 

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me!!</button>            
        </div>
    );
}
 
export default Home;
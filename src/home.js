const Home = () => {

    const handleClick = ()=>{
        console.log("hello react")
    }

    const handleClickAgain = (name,e)=>{
        console.log(name,e);
    }

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me!!</button>
            <button onClick={(e)=>handleClickAgain('kevin',e)}>click me again</button>
        </div>
    );
}
 
export default Home;
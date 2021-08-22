// import './App.css';
import Navbar from './navbar'
import Home from './home'
function App() {
  // const title = 'welcome to my react class';
  
  return (
    <div className="App">  
    <Navbar/>  
     <div className="content">
       <Home />
     </div>
    </div>
  );
}

export default App;

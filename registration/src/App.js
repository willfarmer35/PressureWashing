import logo from './logo.svg';
import './App.css';
import Login from './/components/login'
import {Routes,Route} from 'react-router-dom'
import Registration from './components/Registration';
import Review from './components/Review'
import Create from './components/Create'
import Services from './components/Services';
import About from './components/About'
function App() {
  return (
    <div className="App">
    
        <Routes>
        <Route path ='/about' element = {<About />}/>
        <Route path ='/review' element = {<Review />}/>
        <Route path ='/create' element = {<Create />}/>
        <Route path ='/services' element = {<Services />}/>
  <Route path ='/sign-up' element = {<Registration />}/>
  <Route path ='/' element = {<Login />}/>
</Routes>
    
   

     
    </div>
  );
}

export default App;

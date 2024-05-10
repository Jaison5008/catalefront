import React from "react"; 
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../src/components/home' 
import Login from '../src/components/login' 
import Signup from '../src/components/signup' 
import Navbar from "../src/components/Nav"; 
import Userhome from '../src/components/user'
import AdminHome from "../src/components/admin";
function App() {
  return (<BrowserRouter>
<Navbar/>
<Routes> 
<Route exact path='/' element={<Home/>}/>

<Route exact path='/login' element={<Login/>}/> 

<Route exact path='/signup' element={<Signup/>}/>   
<Route exact path='/userhome' element={<Userhome/>}/>   
<Route exact path='/adminhome' element={<AdminHome/>}/>  
 {/* <Route exact path='/signup' element={<Signup/>}/> <Route exact path='/viewanswer' element={<Answer/>}/>  */}
</Routes>


</BrowserRouter> 
    
  );
}

export default App;

import {  useEffect, useState} from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector} from 'react-redux'
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import  { useNavigate } from 'react-router-dom';

function OffcanvasExample() {   
  
  //const isLoading = useSelector((state) => state.auth.isLoading);
 //const error=useSelector((state) => state.auth.error);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user=useSelector((state) => state.auth.user); 
  //console.log(user.token)
console.log(user)  
localStorage.setItem ("userId",JSON.stringify(user.userId))  
 localStorage.setItem("token",JSON.stringify(user.token))
const [active,setActive]=useState({}) 
console.log(active)
    const navi=useNavigate()    
    
    useEffect(()=>{ 
setActive({role:user.role,isAuth:isAuth}) 

    },[user,isAuth])
    setTimeout(() => {
      localStorage.clear();
  },7200000);
   
    const loginaction=()=>{ 
       navi('/login')
    }
   
        const signup=()=>{ 
            navi('/signup')
            }  
            const Home=()=>{  
              setActive({role:'home'})
              navi('/')
            } 
           
           const logout=()=>{   
            localStorage.clear();
            setActive({role:'home'}) 
            
            navi('/')
           }
        
  return (
    <div >
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg" style={{display:'flex',justifyContent:'space-between'  }} >
          
          <Container fluid >  

            <Container style={{display:'flex',justifyContent:'space-between'}}>  
            <div> 
            <Navbar.Brand href="#"> Cattle</Navbar.Brand>
            
            </div>
            
            
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
             style={{marginLeft:'5px'}} />
             
          
          
          </Container> 
          
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Cattle
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body> 
                
                <Nav className="justify-content-end flex-grow-1 pe-3">  
                 {active.role==="home"?<>
                  <Nav.Link onClick={Home}>Home</Nav.Link>  
                <Nav.Link onClick={loginaction}>Login</Nav.Link> 
                <Nav.Link onClick={signup}>signup</Nav.Link>
                </>:<></>} 
                {active.role==='user'&&isAuth?<>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>  
                  
                  <Nav.Link >User</Nav.Link>  
                  </>:<></>}  
                  {active.role==='admin'&&isAuth?<>
                  
                  <Nav.Link onClick={logout}>Logout</Nav.Link> 
                  <Nav.Link >Admin</Nav.Link>  
                  </>:<></>}  
                
            
                  
                   
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;
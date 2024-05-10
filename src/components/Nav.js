import {  useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Offcanvas from 'react-bootstrap/Offcanvas';

//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import  { useNavigate } from 'react-router-dom';

function OffcanvasExample() {   
  
    const [action,setAction]=useState(true)
    
    const navi=useNavigate()   
    
    
   
    const loginaction=()=>{ 
       navi('/login')
    }
   
        const signup=()=>{ 
            navi('/signup')
            }  
            const Home=()=>{ 
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
                 {action?<>
                  <Nav.Link onClick={Home}>Home</Nav.Link>  
                <Nav.Link onClick={loginaction}>Login</Nav.Link> 
                <Nav.Link onClick={signup}>signup</Nav.Link>
                </>:<>
                  <Nav.Link >Logout</Nav.Link> 
                  <Nav.Link >User</Nav.Link>  
                  
                  <Nav.Link >Logout</Nav.Link> 
                  <Nav.Link >Admin</Nav.Link>  
                  </>
                }
            
                  
                   
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
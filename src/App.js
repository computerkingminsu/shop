
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     
      <div className='main-bg'></div> 
      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return(
                <Card shoes={shoes[i]} i={i+1}></Card>
              )
            })
          }
        </div>
      </div>     
    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
    <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>    
  )
}

export default App;

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function Navbarr({settext, setrate
 }) {
  
  
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" settext={settext} setrate>
    <Container fluid>
      <Navbar.Brand href="#">My Movie </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><Link to="/" style={{textDecoration:"none", color:"#dd2476"}} > Movies </Link></Nav.Link>
          <Nav.Link href="#action2"><Link to="/contact"  style={{textDecoration:"none", color:"#dd2476"}}> Contact </Link></Nav.Link>
          <Nav.Link href="#action2"><Link to="/about"  style={{textDecoration:"none", color:"#dd2476"}}>About </Link> </Nav.Link>
        </Nav>
        <ReactStars
    count={5}
  
 onChange={(newRating)=>setrate(newRating)}
    size={24}
    activeColor="#dd2476"
  />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=> settext(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarr
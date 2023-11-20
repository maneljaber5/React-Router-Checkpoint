import React from 'react'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddMovie({movies,setmovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
      name:"" ,
      posterurl:"" ,
      description:"",
      rating:""

    });
     
    const add= () => setmovies([...movies, newmovie]);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="enter movie image" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="enter movie description"  onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value})} />
       
      </Form.Group>
      </Form>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{add();handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie
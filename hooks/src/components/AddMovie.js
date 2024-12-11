import React, { useState } from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
const AddMovie = ({add}) => {
    const [show,setShow]= useState(false);
    const handleClose = () => setShow(false);
    const handleShow =() =>setShow(true);
    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    const [rate,setRate]= useState("")
    const [posterUrl,setPosterUrl]= useState("")
    const handleTitle =(e) => {
        setTitle(e.target.value)
    }
    const handleDescription =(e) => {
        setDescription(e.target.value)
    }
    const handleRate =(e) => {
        setRate(e.target.value)
    }
    const handlePoster =(e) => {
        setPosterUrl(e.target.value)
    
    }
    const handleMovie =(e) => {
        let newmovie={title,description,rate,posterUrl}
        add(newmovie)
    }
  return (
     <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
 
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
      <Modal.Body>
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=> handleTitle(e)}/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e)=> handleDescription(e)}/>
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e)=> handleRate(e)}/>
        <Form.Label>PosterUrl</Form.Label>
        <Form.Control type="url" placeholder="Enter poster url" value={posterUrl} onChange={(e)=> handleRate(e)}/>
        </Modal.Body>  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={()=> handleMovie()}>
            Save changes
            </Button>
        </Modal.Footer>
        </Modal>
        </>
      );
};


export default AddMovie



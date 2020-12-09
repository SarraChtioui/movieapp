import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function AddMovie({add}) {
  const [show, setShow] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rate, setRate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = el => {
      el.preventDefault()
      add(Title, Description, Poster, Rate)
      
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="" value ={Title} onChange ={e => setTitle(e.target.value)}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="" value ={Description} onChange ={e => setDescription(e.target.value)}/>
    <Form.Label>Poster</Form.Label>
    <Form.Control type="text" placeholder=""value ={Poster} onChange ={e => setPoster(e.target.value)} />
    <Form.Label>Rate</Form.Label>
    <Form.Control type="text" placeholder="" value ={Rate} onChange ={e => setRate(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie

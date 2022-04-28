import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import  { useState } from 'react';

function NotificationModal(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Continue Shopping</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default NotificationModal;
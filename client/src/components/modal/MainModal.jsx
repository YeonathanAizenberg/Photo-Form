import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './MainModal.css';

function MainModal({show, onHide, data, title}) {

    return (
        <Modal
            show={show} 
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='modal-new-color'>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title} :
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='online-users-list-wrapper'>
                    {data?.map((person, index) => 
                        <div key={index}>
                            {person}
                        </div>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer className='modal-new-color'>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;
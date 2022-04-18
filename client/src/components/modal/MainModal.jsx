import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PhotoCard from '../photoCard/PhotoCard';
import PhotoMetaCard from '../photoMetaCard/PhotoMetaCard';
import './MainModal.css';

function MainModal({ show, onHide, data, title, metaData }) {
    const correctData = data?.data
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
                {metaData ?
                    <div>
                        {correctData?.map((photo, index) =>
                            <PhotoMetaCard
                                key={index}
                                data={photo}
                            />
                        )}
                    </div>
                    :
                    <div>
                        {correctData?.map((photoMeta, index) =>
                            <PhotoCard
                                key={index}
                                data={photoMeta}
                            />
                        )}
                    </div>
                }
            </Modal.Body>
            <Modal.Footer className='modal-new-color'>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MainModal;
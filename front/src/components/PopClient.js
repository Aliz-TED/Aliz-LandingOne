import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

export default function PopClient(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props)
    return (
        <div>
            <button variant="primary" onClick={handleShow}> Envoyer</button>
            {(() => {
                if (!props.errors.firstname && !props.errors.lastname && !props.errors.email) {

                    return <Modal show={show} onHide={handleClose}
                        centered size="lg">

                        <Modal.Header>
                            <div className="column-header">
                                <div className="modal-bg">
                                    <svg viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <Modal.Title>Vos informations ont bien été enregistrées !</Modal.Title>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                L'un de nos experts vous contactera dans les 48h,<br></br> À très bientot chez Aliz!
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-aliz" onClick={handleClose}>Fermer</Button>
                        </Modal.Footer>
                    </Modal>
                }
            })()}
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom'
import logo from './../images/logo.png';
import money from './../images/money.png';
import time from './../images/time.png';

export default function PopSimul(props) {
    // const history = useHistory();
    const [redirection, setRedirection] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseRedirect = () => {
        setShow(false);
        setRedirection(true);
    }

    const handleShow = () => setShow(true);

    // useEffect(() => {
    //     if (redirection) {
    //         history.push('/#contact')
    //         setRedirection(false)
    //         history.push('/#contact')

    //     }
    // }, [redirection]);

    return (
        <div>
            <button variant="primary" onClick={handleShow}> CALCULER</button>
            {(() => {
                if (props.calcul.calcul != null && props.calcul.calcul !== 0) {

                    return <Modal show={show} onHide={handleClose}
                        centered size="lg" className="simul-popup">
                        <Modal.Header>
                            <div className="column-header">
                                <div className="modal-bg">
                                    <img className="logo" src={logo} alt="Logo Aliz - assistant virtuel et automatisation" />
                                </div>
                                {(() => {
                                    if (props.calcul.spendTime < 10) {
                                        return <Modal.Title>Vous auriez pu partir en week-end le vendredi !</Modal.Title>
                                    } else if (props.calcul.spendTime < 24) {
                                        return <Modal.Title>Vous auriez pu vous offrir un week-end prolongé.</Modal.Title>
                                    } else {
                                        return <Modal.Title>Vous auriez pu prendre une semaine de vacances. </Modal.Title>
                                    }
                                })()}
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container">
                                <div className="row justify-content-center">

                                    <div className="col-12 col-lg-6">
                                        <div className="spend-money">
                                            <div className="money-icon">
                                                <img className="logo" src={money} alt="Icon Cash - Argent - Économies" />
                                            </div>
                                            <h4>{props.calcul.calcul} €</h4>
                                            <p>C'est ce que vous perdez chaque mois </p>

                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="spend-time">
                                            <div className="time-icon">
                                                <img className="logo" src={time} alt="Icon Cash - Argent - Économies" />
                                            </div>
                                            <h4>{props.calcul.spendTime} h</h4>
                                            <p>C'est le temps que vous pourriez utiliser autrement chaque mois </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="btn-aliz" onClick={handleCloseRedirect}>JE VEUX OPTIMISER MON TEMPS</Button>
                        </Modal.Footer>
                    </Modal>

                } else {
                    return <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                        centered size="lg" className="error-modal">
                        <Modal.Header>
                            <div className="column-header">
                                <div className="modal-bg">
                                    <svg viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                                <Modal.Title>OOPS... DES INFORMATIONS SONT ERRONNÉES</Modal.Title>
                            </div>
                        </Modal.Header>
                        <Modal.Body><p>Merci de saisir une valeur supérieure à 0 dans les champs du simulateur</p></Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-aliz btn-errorSimul" onClick={handleClose}>CORRIGER</Button>
                        </Modal.Footer>
                    </Modal>
                }
            })()}

        </div>
    )
}

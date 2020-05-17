import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Download from '../../media/google-play-badge-large.png'

export default class ModalPopup extends Component {
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    style={{ textAlign: 'center'}}>

                    <Modal.Header closeButton style={{background: '#262e36'}}></Modal.Header>

                    <Modal.Body>
                        <img 
                            src={ Download } 
                            href="https://play.google.com/store/apps/details?id=app.eugra.eugra&hl=en" 
                            target="_blank"
                            alt="Play Store"
                            rel="noopener"
                            style={{maxWidth: '100%', width: 'auto'}}>
                        </img>

                        <h4>Download <b>Eugra</b> from the Google Play Store.</h4>
                        
                        <p>
                            Uh-oh! It looks like our web application is still in development :( <br></br> 
                            Download Eugra from the Google Play Store and start talking! 
                        </p>
                        
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

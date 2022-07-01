import React from 'react'
import { Modal } from 'react-bootstrap'
import SignUp from '../../Auth/SignUp'
const ModalAuth = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Body className="show-grid">
                <SignUp onHide={props.onHide} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalAuth
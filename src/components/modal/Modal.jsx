import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './modal.scss'
export const ModalClass = (props) => {
  const { modalText } = props
  return (
    <>
      <Modal
        {...props}
        className="modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{modalText}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

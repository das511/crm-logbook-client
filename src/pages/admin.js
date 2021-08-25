import { useState } from "react";
import { Modal, Row, Button } from "react-bootstrap";
import AdminLeftPanel from "../components/adminLeftPanel";
import AdminRightPanel from "../components/adminRightPanel";

const Admin = () => {
    const [show,setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Row>
            <AdminLeftPanel handleShow={handleShow} />
            <AdminRightPanel/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Row>
     );
}
 
export default Admin;
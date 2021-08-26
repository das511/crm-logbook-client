import { useState } from "react";
import { Row, Button, Col, Container, Image } from "react-bootstrap";
import AdminRightPanel from "../components/adminRightPanel";
import ModalStatus from "../components/modalStatus";
import add from '../assets/img/add-circle-outline.svg'
import { icon } from "../assets/style";
import rocket from '../assets/img/rocket-outline.svg'
import ModalAddress from "../components/modalAddress";
import ModalNameZk from "../components/modalNameZk";
import ModalLocation from "../components/modalLocation";
import ModalPostType from "../components/modalPostType";

const Admin = () => {
    const [showModalStatus,setShowStatus] = useState(false)
    const [showModalPostType,setShowPostType] = useState(false)
    const [showModalNameZk,setShowNameZk] = useState(false)
    const [showModalLocation,setShowLocation] = useState(false)
    const [showModalAddress,setShowAddress] = useState(false)


    return ( 
        <Row>
            <Col md="2" className="bg-success" style={{height:window.innerHeight}}>
                <Container className="m-2 d-grid gap-2">
                    <Button variant="outline-light p-2 mt-3 d-flex" onClick={() => { setShowNameZk(true) }}>
                        <Image src={ add } style={icon}/>
                        Добавить жилой массив
                    </Button>
                    <Button variant="outline-light p-2 mt-3 d-flex" onClick={() => { setShowAddress(true) }}>
                        <Image src={ add } style={icon}/>
                        Добавить адрес
                    </Button>
                    <Button variant="outline-light p-2 mt-3 d-flex" onClick={() => { setShowPostType(true) }}>
                        <Image src={ add } style={icon}/>
                        Добавить тип заявки
                    </Button>
                    <Button variant="outline-light p-2 mt-3 d-flex" onClick={() => { setShowStatus(true) }}>
                        <Image src={ add } style={icon}/>
                        Добавить статус
                    </Button>
                    <Button variant="outline-light p-2 mt-3 d-flex" onClick={() => { setShowLocation(true) }}>
                        <Image src={ add } style={icon}/>
                        Добавить локацию
                    </Button>
                    
                    <Button variant="outline-light p-2 d-flex" style={{marginTop: 100}}>
                        <Image src={ rocket } style={icon}/>
                        Запросить повышение
                    </Button>
                </Container>   
            </Col>
            <AdminRightPanel/>
            <ModalStatus show={showModalStatus} handleClose={setShowStatus}/>
            <ModalAddress show={showModalAddress} handleClose={setShowAddress}/>
            <ModalNameZk show={showModalNameZk} handleClose={setShowNameZk}/>
            <ModalLocation show={showModalLocation} handleClose={setShowLocation}/>
            <ModalPostType show={showModalPostType} handleClose={setShowPostType}/>
        </Row>
     );
}
 
export default Admin;
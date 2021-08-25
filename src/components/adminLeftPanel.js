import add from '../assets/img/add-circle-outline.svg'
import { icon } from "../assets/style";
import rocket from '../assets/img/rocket-outline.svg'
import { Button, Col, Container, Image } from 'react-bootstrap';

const AdminLeftPanel = ({handleShow}) => {
    return ( 
        <Col md="2" className="bg-success" style={{height:window.innerHeight}}>
            <Container className="m-2 d-grid gap-2">
                <Button variant="outline-light p-2 mt-3 d-flex" onClick={handleShow}>
                    <Image src={ add } style={icon}/>
                    Добавить жилой массив
                </Button>
                <Button variant="outline-light p-2 mt-3 d-flex" onClick={handleShow}>
                    <Image src={ add } style={icon}/>
                    Добавить тип заявки
                </Button>
                <Button variant="outline-light p-2 mt-3 d-flex" onClick={handleShow}>
                    <Image src={ add } style={icon}/>
                    Добавить статус
                </Button>
                <Button variant="outline-light p-2 mt-3 d-flex" onClick={handleShow}>
                    <Image src={ add } style={icon}/>
                    Добавить локацию
                </Button>
                
                <Button variant="outline-light p-2 d-flex" style={{marginTop: 100}}>
                    <Image src={ rocket } style={icon}/>
                    Запросить повышение
                </Button>
            </Container>   
        </Col> );
}
 
export default AdminLeftPanel;
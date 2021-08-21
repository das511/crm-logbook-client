import { Col, Row, Image, Button } from "react-bootstrap"
import trash from '../assets/img/trash-outline.svg'
import save from '../assets/img/save-outline.svg'
import {icon} from '../assets/style'
import undo from '../assets/img/arrow-undo-outline.svg'

const OrderButton = () => {
    return ( 
        <Col md="12">
            <Row>
                <Col className=" text-left">
                    <Button className="btn-light btn-outline-danger m-3">
                        <Image src={trash} style={icon}/>
                        Удалить заявку
                    </Button>
                </Col>
                <Col className="text-end text-right">
                    <Button className="btn-info m-3">
                        <Image src={save} style={icon}/>
                        Внести изменения
                    </Button>
                    <Button className="btn-warning m-3">
                        <Image src={undo} style={icon}/>
                        Отменить изменения
                    </Button>
                </Col>
            </Row>
        </Col>
     );
}
 
export default OrderButton;
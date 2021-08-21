import { observer } from "mobx-react-lite";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import OrderList from "../components/orderList";
import { ORDER_HEADER } from "../utils/consts";

const Order = observer( () => {
    return ( 
        <Container>
            <Row>
                <Col className="m-3">
                    <input type="submit" value="Добавить заявку" className="btn btn-success m-1"/>
                </Col>
                <Col className="m-3 text-end text-right">
                    <Button type="button" className="btn btn-info m-1 text-light">Поиск</Button>
                    <Button type="button" className="btn btn-info m-1 text-light">Фильтр</Button>
                </Col>
            </Row>
            <Row>
                <Table bordered hover>
                    <thead>
                        <tr>
                            { ORDER_HEADER.map(el=> <th key={el} >{ el }</th>) }
                        </tr>
                    </thead>
                    <tbody>
                        <OrderList/>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
})
 
export default Order;
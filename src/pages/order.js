import { observer } from "mobx-react-lite";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import OrderList from "../components/orderList";
import { ORDER_HEADER, ORDER_ROUTE } from "../utils/consts";
import create from '../assets/img/create-outline.svg'
import search from '../assets/img/search-outline.svg'
import filter from '../assets/img/filter-outline.svg'
import {icon} from '../assets/style'
import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchAll } from '../http/guideApi'
import { fetchAllOrder } from "../http/orderApi";

const Order = observer( () => {
    const history = useHistory()
    const {order} = useContext(Context)

    useEffect(() => {
        fetchAll('status').then(data=>order.setStatus(data))
        fetchAll('postType').then(data=>order.setPostType(data))
        fetchAll('location').then(data=>order.setLocation(data))
        fetchAll('nameZk').then(data=>order.setNameZk(data))
        fetchAllOrder().then(data=>order.setOrders(data.rows))
    })

    return ( 
        <Container>
            <Row>
                <Col className="m-3">
                    <Button className="m-1 btn-success" onClick={()=>history.push(ORDER_ROUTE + '/new')}><Image src={create} style={icon}/>Добавить заявку</Button>
                </Col>
                <Col className="m-3 text-end text-right">
                    <Button variant="outline-success" className="m-1"><Image src={search} style={icon}/>Поиск</Button>
                    <Button variant="outline-success" className="m-1"><Image src={filter} style={icon}/>Фильтр</Button>
                </Col>
            </Row>
            <Row>
                <Table className="table-hover">
                    <thead className="thead-default">
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
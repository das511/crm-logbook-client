import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Container, Row, NavDropdown } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import OrderButton from '../components/orderButton';
import OrderEvent from '../components/orderEvent';
import OrderInfo from '../components/orderInfo'; 
import { fetchOneOrder } from '../http/orderApi';

const OrderPage = observer( () => {
    const [order, setOrder] = useState({})
    const [event, setEvent] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchOneOrder(id).then(data=>setOrder(data))
        //fetchEvent(id).then(data=>setEvent(data))
    }, [null])

    return ( 
        <Container>
            <Row style={{ marginTop: 20}}>
                <OrderInfo order={order}/>
                <OrderEvent event={event}/>
            </Row>
            <NavDropdown.Divider/>
            <Row>
                <OrderButton/>
            </Row>
            
        </Container>
     );
})
 
export default OrderPage;
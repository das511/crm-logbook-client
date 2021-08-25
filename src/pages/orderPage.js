import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Container, Row, NavDropdown } from 'react-bootstrap'
import OrderButton from '../components/orderButton';
import OrderEvent from '../components/orderEvent';
import OrderInfo from '../components/orderInfo';
import { Context } from '../index'

const OrderPage = observer( (orderItem) => {
    const { order } = useContext(Context)
    return ( 
        <Container>
            <Row style={{ marginTop: 20}}>
                <OrderInfo order={orderItem}/>
                <OrderEvent event={order.event}/>
            </Row>
            <NavDropdown.Divider/>
            <Row>
                <OrderButton/>
            </Row>
            
        </Container>
     );
})
 
export default OrderPage;
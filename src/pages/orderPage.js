import { observer } from 'mobx-react-lite';
import { Container, Row } from 'react-bootstrap'
import OrderButton from '../components/orderButton';
import OrderEvent from '../components/orderEvent';
import OrderInfo from '../components/orderInfo';

const OrderPage = observer( () => {
    return ( 
        <Container>
            <Row>
                <OrderInfo/>
                <OrderEvent/>
            </Row>
            <Row>
                <OrderButton/>
            </Row>
            
        </Container>
     );
})
 
export default OrderPage;
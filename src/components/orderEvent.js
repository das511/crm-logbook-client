import { Col, Container } from "react-bootstrap";
import { log } from '../assets/style'

const OrderEvent = ({event}) => {
    return ( 
        <Col md="3">
            <Container style={log}>
                    {
                        event.map(({date,comment,creator})=>   
                            <div key="index" className="m-2 p-2 border">
                                <b><h6>{ date +  ', ' + creator }</h6></b>
                                <span>{ comment }</span>
                            </div>
                        )
                    }
            </Container>
        </Col>
     );
}
 
export default OrderEvent;
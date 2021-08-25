import { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { Context } from "..";
import { log } from '../assets/style'

const OrderEvent = ({event}) => {
    const now = new Date()
    const {user} = useContext(Context)
    event = (event === []) || [{
        date: now.toLocaleString('ru'),
        comment: "Заявка создается",
        creator: user.user.surname
    }]
    return ( 
        <Col md="3">
            <Container style={log}>
                    {
                        event.map(({date,comment,creator})=>   
                            <div key="index" className="m-2 p-2 border">
                                <b><h6>{ date +  ' ' + creator }</h6></b>
                                <span>{ comment }</span>
                            </div>
                        )
                    }
            </Container>
        </Col>
     );
}
 
export default OrderEvent;
import { Col, Container, Row, Image, Form } from "react-bootstrap";
import { icon, scroll, statusColor } from "../assets/style";
import tag from '../assets/img/pricetag-outline.svg'
import { useContext } from "react";
import { Context } from "..";

const OrdrInfo = ({order}) => {
    const {status,user,nameZk,postType,location} = useContext(Context).order
    return ( 
        <Col md="9">
            <Container>
                <Form>
                    <Row>
                        <Col ms="auto">
                            <h4 className="setion-title p-3" style={statusColor( status.find(s => order.statusId === s.id)?.color ||"#d73d6c")}>
                                <Image src={tag} style={icon}/>
                                { order.id ? 'Заявка № ' + order.id + ' - ' : '' }
                                <b> {status.find(s => order.statusId === s.id)?.value || 'Заявка создается'} </b>
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="mt-3" >   
                                <Col>
                                    <Form.Label><b>Заявитель</b></Form.Label>
                                    <Form.Control placeholder="ФИО" value={order.customer} onChange={ e => {order.customer = e.target.value;}}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Телефон" value={order.phone}/>
                                </Col>
                            </Row>
                            <Row className="mt-3" >   
                                <Col>
                                    <Form.Label><b>Адрес</b></Form.Label>
                                    <Form.Control placeholder="Жилой массив" value={ nameZk.find(s => order.nameZkId === s.id)?.value}/>
                                </Col>
                            </Row>
                            <Row className="mt-3" >
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Улица" value={order.address}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label><b>Исполнитель</b></Form.Label>
                                    <Form.Control placeholder="Тип заявки" value={ postType.find(s => order.postTypeId === s.id)?.value}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="ФИО" value={user.find(s => order.userId === s.id)?.surname}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Локация" value={ location.find(s => order.locationId === s.id)?.value}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Назначенная дата" value={order.dateAppointed} onChange={e=>{order.dateAppointed = e.target.value; console.log(order);}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md="12">
                            <Form.Label><b>Комментарий</b></Form.Label>
                            <Form.Control as="textarea" rows={3} style={{resize:"none"}} value={order.comment}/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Label><b>Фотографии до</b></Form.Label>
                            <div style={scroll} className="border border-success p-2">{order.photoBefore}</div>
                        </Col>
                        <Col>
                            <Form.Label><b>Фотографии после</b></Form.Label>
                            <div style={scroll} className="border border-success p-2">{order.photoAfter}</div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Col>
     );
}
 
export default OrdrInfo;
import { Col, Container, Row, Image, Form } from "react-bootstrap";
import { icon, scroll, statusColor } from "../assets/style";
import tag from '../assets/img/pricetag-outline.svg'

const OrdrInfo = () => {
    const order = {}
    // const order = {
    //     id: 5,
    //     statusId: "Создана",
    //     customer: "Заявитель ззззз",
    //     phone: "89112709067",
    //     nameZkId: 1,
    //     locationId:1,
    //     address: "Улица Пшкина дом колотушкина",
    //     postTypeId: 3,
    //     contractor: "Исполнитель иии",
    //     appointedDate: '25.12.2021',
    //     comment: "Ghjdthjxzysq прочерочный комментарий",
    //     photoBefore: 'http://localhost:3000/assets/before.svg',
    //     photoAfter: 'http://localhost:3000/assets/after.svg',
    // }
    return ( 
        <Col md="9">
            <Container>
                <Form>
                    <Row>
                        <Col ms="auto">
                            <h4 className="setion-title p-3" style={statusColor(order.color||"#d73d6c")}>
                                <Image src={tag} style={icon}/>
                                { order.id ? 'Заявка № ' + order.id + ' - ' : '' }
                                <b> {order.statusId || 'Заявка создается'} </b>
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="mt-3" >   
                                <Col>
                                    <Form.Label><b>Заявитель</b></Form.Label>
                                    <Form.Control placeholder="ФИО" value={order.customer}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Телефон" value={order.phone}/>
                                </Col>
                            </Row>
                            <Row className="mt-3" >   
                                <Col>
                                    <Form.Label><b>Адрес</b></Form.Label>
                                    <Form.Control placeholder="Жилой массив" value={order.nameZkId}/>
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
                                    <Form.Control placeholder="Тип заявки" value={order.postTypeId}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="ФИО" value={order.contractor}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Локация" value={order.locationId}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Назначенная дата" value={order.appointedDate}/>
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
import { Col, Container, Row, Image, Form } from "react-bootstrap";
import { icon, scroll, statusColor } from "../assets/style";
import tag from '../assets/img/pricetag-outline.svg'
import { useContext, useEffect, useState } from "react";
import { Context } from "..";

const OrdrInfo = ({order}) => {
    const {status,user,nameZk,postType,location} = useContext(Context).order

    const [id, setId] = useState('') 
    const [statusId, setStatusId] = useState('') 
    const [locationId, setLocationId] = useState('') 
    const [nameZkId, setNameZkId] = useState('') 
    const [userId, setUserId] = useState('') 
    const [postTypeId, setPostTypeId] = useState('') 
    const [customer, setCustomer] = useState('') 
    const [phone, setPhone] = useState('') 
    const [address, setAddress] = useState('') 
    const [comment, setComment] = useState('') 
    const [dateAppointed, setDateAppointed] = useState('') 
    const [photoBefore, setPhotoBefore] = useState('') 
    const [photoAfter, setPhotoAfter] = useState('')

    useEffect(() => {
        setId(order.id || '')
        setStatusId(status.find(s => order.statusId === s.id) || '')
        setLocationId(location.find(s => order.locationId === s.id)?.value || '')
        setNameZkId(nameZk.find(s => order.nameZkId === s.id)?.value || '')
        setUserId(user.find(s => order.userId === s.id)?.surname || '')
        setPostTypeId(postType.find(s => order.postTypeId === s.id)?.value || '')
        setCustomer(order.customer || '')
        setPhone(order.phone || '')
        setAddress(order.address || '')
        setComment(order.comment || '')
        setDateAppointed(order.dateAppointed || '')
        setPhotoBefore(order.photoBefore || '')
        setPhotoAfter(order.photoAfter || '')
    }, [order,status,user,nameZk,postType,location])

    return ( 
        <Col md="9">
            <Container>
                <Form>
                    <Row>
                        <Col ms="auto">
                            <h4 className="setion-title p-3" style={statusColor( statusId?.color ||"#d73d6c")}>
                                <Image src={tag} style={icon}/>
                                { id ? 'Заявка № ' + id + ' - ' : '' }
                                <b> { statusId?.value || 'Заявка создается'} </b>
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="mt-3">
                                <Col>
                                    <Form.Label><b>Заявитель</b></Form.Label>
                                    <Form.Control placeholder="ФИО" value={customer} onChange={(e)=>{ setCustomer(e.target.value) }}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Телефон" value={phone} onChange={(e)=>{ setPhone(e.target.value) }}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label><b>Адрес</b></Form.Label>
                                    <Form.Control placeholder="Жилой массив" value={ nameZkId } onChange={(e)=>{ setNameZkId(e.target.value) }}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Улица" value={address} onChange={(e)=>{ setAddress(e.target.value) }}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label><b>Исполнитель</b></Form.Label>
                                    <Form.Control placeholder="Тип заявки" value={ postTypeId } onChange={(e)=>{ setPostTypeId(e.target.value) }}/>
                                </Col>
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="ФИО" value={ userId } onChange={(e)=>{ setUserId(e.target.value) }}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Локация" value={ locationId } onChange={(e)=>{ setLocationId(e.target.value) }}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">   
                                <Col>
                                    <Form.Label>&nbsp;</Form.Label>
                                    <Form.Control placeholder="Назначенная дата" value={dateAppointed} onChange={(e)=>{ setDateAppointed(e.target.value) }}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md="12">
                            <Form.Label><b>Комментарий</b></Form.Label>
                            <Form.Control as="textarea" rows={3} style={{resize:"none"}} value={comment} onChange={(e)=>{ setComment(e.target.value) }}/>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Form.Label><b>Фотографии до</b></Form.Label>
                            <div style={scroll} className="bform bform-success p-2">{photoBefore}</div>
                        </Col>
                        <Col>
                            <Form.Label><b>Фотографии после</b></Form.Label>
                            <div style={scroll} className="bform bform-success p-2">{photoAfter}</div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Col>
     );
}
 
export default OrdrInfo;
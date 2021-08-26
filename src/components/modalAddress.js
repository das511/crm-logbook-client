import { Modal, Button, Image, Form } from "react-bootstrap";
import {icon} from '../assets/style'
import create from '../assets/img/create-dark-outline.svg'
import close from '../assets/img/close-outline.svg'
import { createGuideRow } from "../http/guideApi";
import { useContext, useState } from "react";
import { Context } from "..";

const ModalAddress = ({show, handleClose}) => {
    const [value, setValue] = useState('')
    const [house, setHouse] = useState('')
    const [liter, setLiter] = useState('')
    const [nameZkId, setNameZkId] = useState('')

    const { order } = useContext(Context) 

    return ( 
        <Modal
            show={show}
            onHide={()=>handleClose(false)}
            // backdrop="static"
            // keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавление адреса</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3" onChange={(e)=>{ setValue(e.target.value) }} placeholder="Введите улицу"/>
                    <Form.Control className="mt-3" onChange={(e)=>{ setHouse(e.target.value) }} placeholder="Введите номер дома"/>
                    <Form.Control className="mt-3" onChange={(e)=>{ setLiter(e.target.value) }} placeholder="Введите корпус"/>
                    <Form.Control className="mt-3" onChange={(e)=>{ setNameZkId(e.target.value) }} placeholder="Выберете ЖМ"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>handleClose(false)}>
                <Image src={close} style={icon}/>
                Отмена
            </Button>
            <Button variant="outline-success" onClick={()=>{ 
                createGuideRow('address',{value,house,liter,nameZkId}).then( data => { 
                    console.log(data);
                    order.setAddress([...order.address, ...[data]]); 
                    setValue('')
                    setHouse('')
                    setLiter('')
                    setNameZkId('')
                    handleClose(false)
                }) 
            }}>
                <Image src={create} style={icon}/>
                Добавить
            </Button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default ModalAddress;
import { Modal, Button, Image, Form } from "react-bootstrap";
import {icon} from '../assets/style'
import create from '../assets/img/create-dark-outline.svg'
import close from '../assets/img/close-outline.svg'
import { createGuideRow } from "../http/guideApi";
import { useContext, useState } from "react";
import { Context } from "..";

const ModalStatus = ({show, handleClose}) => {
    const [value, setValue] = useState('')
    const [color, setColor] = useState('')

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
                <Modal.Title>Добавление статуса</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3" onChange={(e)=>{ setValue(e.target.value) }} placeholder="Введите статус"/>
                    <Form.Control className="mt-3" onChange={(e)=>{ setColor(e.target.value) }} placeholder="Выберете цвет"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>handleClose(false)}>
                <Image src={close} style={icon}/>
                Отмена
            </Button>
            <Button variant="outline-success" onClick={()=>{ 
                createGuideRow('status',{value,color}).then( data => { 
                    order.setStatus([...order.status, ...[data]]); 
                    setColor('')
                    setValue('')
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
 
export default ModalStatus;
import { Modal, Button, Image, Form } from "react-bootstrap";
import {icon} from '../assets/style'
import create from '../assets/img/create-dark-outline.svg'
import close from '../assets/img/close-outline.svg'
import { createGuideRow } from "../http/guideApi";
import { useContext, useState } from "react";
import { Context } from "..";

const ModalPostType = ({show, handleClose}) => {
    const [value, setValue] = useState('')

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
                <Modal.Title>Добавление типа заявки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control className="mt-3" onChange={(e)=>{ setValue(e.target.value) }} placeholder="Введите тип заявки"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={()=>handleClose(false)}>
                <Image src={close} style={icon}/>
                Отмена
            </Button>
            <Button variant="outline-success" onClick={()=>{ 
                createGuideRow('postType',{value}).then( data => { 
                    console.log(data);
                    order.setPostType([...order.postType, ...[data]]); 
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
 
export default ModalPostType;
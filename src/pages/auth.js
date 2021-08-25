import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Card, Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { registration, logIn } from "../http/userApi";
import { LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { Context } from '../index'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import person from '../assets/img/person-outline.svg'
import loginIcon from '../assets/img/log-in-outline.svg'
import { icon } from '../assets/style'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await logIn(login,password)
            }
            else {
                data = await registration(login,password,userRoleId,surname,firstName,lastName)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history.push(ORDER_ROUTE)
        } catch (error) {
            NotificationManager.error(error.response.data.message, 'Ошибка авторизации');
        }
    }
    const [login,setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [surname, setSurname] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userRoleId] = useState(1)
    return ( 
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <NotificationContainer/>
            <Card className="w-50 p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    {
                        isLogin ?
                        <Row>   
                            <Form.Control
                                placeholder="Введите номер телефона"
                                className="mt-4"
                                value={login}
                                onChange={ e => setLogin(e.target.value)}
                            />
                            <Form.Control 
                                placeholder="Введите пароль"
                                className="mt-2"
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                                type="password"
                            />
                        </Row>
                        :
                        <Row>   
                            <Form.Control
                                placeholder="Введите номер телефона"
                                className="mt-4"
                                value={login}
                                onChange={ e => setLogin(e.target.value)}
                            />
                            <Form.Control 
                                placeholder="Введите пароль"
                                className="mt-2"
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                            />
                            <Form.Control 
                                placeholder="Введите фамилию"
                                className="mt-2"
                                value={surname}
                                onChange={ e => setSurname(e.target.value)}
                            />
                            <Form.Control 
                                placeholder="Введите имя"
                                className="mt-2"
                                value={firstName}
                                onChange={ e => setFirstName(e.target.value)}
                            />
                            <Form.Control 
                                placeholder="Введите отчество"
                                className="mt-2"
                                value={lastName}
                                onChange={ e => setLastName(e.target.value)}
                            />
                        </Row>

                    }
                    <Row className="d-flex justify-content-between mt-3">
                        {
                            isLogin ?
                            <Col><div> Нет аккаунта ? <NavLink to={ REGISTRATION_ROUTE }>Зарегестрируйтесь!</NavLink></div></Col>
                            :
                            <Col><div> Есть аккаунт ? <NavLink to={ LOGIN_ROUTE }>Войдите!</NavLink></div></Col>
                        }
                        {
                            isLogin ?
                            <Col className="text-end text-right"><Button onClick={click} className="btn-success"><Image src={ loginIcon } style={icon} className=""/>Войти</Button></Col>
                            :
                            <Col className="text-end text-right"><Button onClick={click} className="btn-success"><Image src={ person } style={icon} className=""/>Зарегистрироваться</Button></Col>
                        }
                        
                    </Row>
                </Form>
            </Card>
        </Container>
     );
})
 
export default Auth;
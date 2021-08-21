import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return ( 
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card className="w-50 p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    {
                        isLogin ?
                        <Row>   
                            <Form.Control
                                placeholder="Введите номер телефона"
                                className="mt-4"
                            />
                            <Form.Control 
                                placeholder="Введите пароль"
                                className="mt-2"
                            />
                        </Row>
                        :
                        <Row>   
                            <Form.Control
                                placeholder="Введите номер телефона"
                                className="mt-4"
                            />
                            <Form.Control 
                                placeholder="Введите пароль"
                                className="mt-2"
                            />
                            <Form.Control 
                                placeholder="Введите фамилию"
                                className="mt-2"
                            />
                            <Form.Control 
                                placeholder="Введите имя"
                                className="mt-2"
                            />
                            <Form.Control 
                                placeholder="Введите отчество"
                                className="mt-2"
                            />
                            <Form.Select className="mt-2">
                                <option disabled selected>Выберите должность</option>
                            </Form.Select>
                        </Row>

                    }
                    <Row className="d-flex justify-content-between mt-3">
                        {
                            isLogin ?
                            <Col xs="8"><div> Нет аккаунта ? <NavLink to={ REGISTRATION_ROUTE }>Зарегестрируйтесь!</NavLink></div></Col>
                            :
                            <Col ms="8"><div> Есть аккаунт ? <NavLink to={ LOGIN_ROUTE }>Войдите!</NavLink></div></Col>
                        }
                        {
                            isLogin ?
                            <Col xs="2"><Button className="btn-success">Войти</Button></Col>
                            :
                            <Col xs="4"><Button className="btn-success">Зарегистрироваться</Button></Col>
                        }
                        
                    </Row>
                </Form>
            </Card>
        </Container>
     );
}
 
export default Auth;
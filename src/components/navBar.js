import { React, useContext} from 'react';
import { Context } from '../index';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, ORDER_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context)

    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand className={"text-light"} >crm-ЖКХ</Navbar.Brand>
                { user.isAuth ? 
                    <Nav className={ "ml-auto" }>
                        <NavLink to={ ORDER_ROUTE } className="m-1 btn btn-outline-light">Список заявок</NavLink>
                        <NavLink to={ ADMIN_ROUTE } className="m-1 btn btn-outline-light">Панель управления</NavLink>
                        <NavLink to={ LOGIN_ROUTE } className="m-1 btn btn-outline-light" onClick={ () => user.setIsAuth(false) }>Выйти</NavLink>
                    </Nav>
                    :
                    <Nav className={ "ml-auto" }>
                        <NavLink to={ LOGIN_ROUTE } className="m-1 btn btn-outline-light" >Авторизация / Регистрация</NavLink>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})




export default NavBar;
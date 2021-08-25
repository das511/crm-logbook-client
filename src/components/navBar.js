import { React, useContext} from 'react';
import { Context } from '../index';
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, ORDER_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom';
import { icon, logo } from '../assets/style';
import people from '../assets/img/people-outline.svg'
import setting from '../assets/img/settings-outline.svg'
import lib from '../assets/img/library-outline.svg'
import constuct from '../assets/img/construct-outline.svg'
import exit from '../assets/img/exit-outline.svg'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const cleanUser = () => {
        user.setIsAuth(false)
        localStorage.token = undefined 
        user.setUser({})
    }
    return (
        <Navbar bg="success" expand="lg">
            <Container>
                <Navbar.Brand className={"text-light"}><Image src={ constuct } style={logo}/>АИС-ЖКХ {user? <b>{user.user.surname}</b> : ''}</Navbar.Brand>
                { user.isAuth ? 
                    <Nav className={ "ml-auto" }>
                        <NavLink to={ ORDER_ROUTE } className="m-1 btn btn-outline-light">
                            <Image src={ lib } style={icon}/>
                            Список заявок</NavLink>
                        <NavLink to={ ADMIN_ROUTE } className="m-1 btn btn-outline-light">
                            <Image src={ setting } style={icon}/>
                            Панель управления</NavLink>
                        <NavLink to={ LOGIN_ROUTE } className="m-1 btn btn-outline-light" onClick={ cleanUser }>
                            <Image src={ exit } style={icon}/>
                            Выйти
                        </NavLink>
                    </Nav>
                    :
                    <Nav className={ "ml-auto" }>
                        <NavLink to={ LOGIN_ROUTE } className="m-1 btn btn-outline-light" >
                            <Image src={ people } style={icon}/>
                            Авторизация / Регистрация
                        </NavLink>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})




export default NavBar;
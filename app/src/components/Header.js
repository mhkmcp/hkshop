import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { logout } from '../redux/actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>

                    <Navbar.Brand href='/'>HKShop</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link href='/cart'><FontAwesomeIcon icon={ faShoppingCart }/> Cart</Nav.Link>
                            { userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <Nav.Link href='/profile'>
                                        <NavDropdown.Item><FontAwesomeIcon icon={ faUserCircle }/>Profile</NavDropdown.Item>
                                    </Nav.Link>

                                    <Nav.Link><NavDropdown.Item onClick={logoutHandler}><FontAwesomeIcon icon={ faSignOutAlt }/>Logout</NavDropdown.Item></Nav.Link>

                                </NavDropdown>
                            ) : (
                                <Nav.Link href='/login'><FontAwesomeIcon icon={ faUser }/> Login</Nav.Link>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

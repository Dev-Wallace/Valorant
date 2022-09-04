import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>

            <Navbar fixed='top' bg="danger" variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand target="_blank" href="https://playvalorant.com/pt-br/?gclid=CjwKCAjwjtOTBhAvEiwASG4bCN0EZdrke-xbAf_fDGAd6cbI6de9uvVu48bBd_87LJT8oIyAAbgvUBoCPfAQAvD_BwE&gclsrc=aw.ds">
                        <img
                            src='https://toppng.com/uploads/preview/valorant-logo-icon-11608279985p9bg0vbcxu.png'
                            width='30'
                            height='30'
                            className="d-inline-block align-top" /> {''}
                        <strong>VALORANT</strong>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link fw-bolder text-light" to="/agentes"> AGENTES </Link>
                        <Link className="nav-link fw-bolder text-light" to="/armas"> ARMAS </Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Menu
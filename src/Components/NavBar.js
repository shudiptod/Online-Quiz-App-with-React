import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">

                <Navbar.Brand as={Link} to='/' >Quizzy</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link as={Link} to='/computer'  >Computer</Nav.Link>

                        <Nav.Link as={Link} to='/mythology' >Mythology</Nav.Link>

                        <Nav.Link as={Link} to='/geography'>Geography</Nav.Link>

                        <Nav.Link as={Link} to='/games' >Video Games</Nav.Link>
                        


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar

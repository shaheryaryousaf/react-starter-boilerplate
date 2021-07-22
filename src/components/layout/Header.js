import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// Import Libraries
import { LinkContainer } from 'react-router-bootstrap'

// Import Styles
import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar expand='lg' style={{ padding: '0.5rem 0' }}>
          <LinkContainer to='/'>
            <Navbar.Brand href='#home' className={styles.navbar_brand}>
              Project Name
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/latest'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header

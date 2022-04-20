import { Container, Navbar, Nav , Image ,NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Header.css'
import {useEffect, useState} from "react";
const Header = () => {
  const [ darkMode, setDarkMode ] = useState(false)

  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  return(
      <header >
        <Navbar collapseOnSelect expand="lg" className="nav-bg " >
          <Container>
            <LinkContainer to="/">

              <Navbar.Brand>ADLEE
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fa fa-shopping-cart"></i>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link>
                    <i className="fa fa-user"></i>
                  </Nav.Link>
                </LinkContainer>

              </Nav>
              <div
                  id="toggle"
                  onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
              >
                <div className="toggle-inner"/>
              </div>
              <Nav >
                <NavDropdown title="فروشگاه" id="collasible-nav-dropdown">
                  <LinkContainer to="/hat">
                    <NavDropdown.Item  >کلاه</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/glasses">
                    <NavDropdown.Item >عینک</NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>
                <LinkContainer to="/contact-us">

                  <Nav.Link>تماس با ما</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">

                  <Nav.Link >درباره ما</Nav.Link>
                </LinkContainer>

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
  )
}
export default Header
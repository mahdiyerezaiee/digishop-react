import { Container, Navbar, Nav , Image ,NavDropdown ,Offcanvas,Form,FormControl, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {cartAction, counterItem} from '../../action/cartAction'
import './Header.css'
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
const Header = () => {
  const [ darkMode, setDarkMode ] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart
  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    // dispatch(cartAction())
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
      <div >
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

                    <i className="fa fa-shopping-cart "></i>

                  </Nav.Link>
                </LinkContainer>
                <div className="count-item">{cartItems && cartItems.reduce((item) => cartItems.length , 0)}</div>

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


          {['lg'].map((expand) => (
              <Navbar key={expand} expand={expand} className="mb-3 d-lg-none nav-bg-md">




                  <Container fluid>
                      <LinkContainer to="/">

                          <Navbar.Brand>ADLEE
                          </Navbar.Brand>
                      </LinkContainer>
                      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        ADLEE
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto">

                            <LinkContainer to="/cart">
                                <Nav.Link>

                                    <i className="fa fa-shopping-cart "></i>

                                </Nav.Link>
                            </LinkContainer>
                            <div className="count-item">{cartItems && cartItems.reduce((item) => cartItems.length , 0)}</div>

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


                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
          ))}

      </div>
  )

}
export default Header
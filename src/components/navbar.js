import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "../style.module.css";

export default function NavbarComp(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to = {"/"} className = {(nav)=> (nav.isActive? style.active: style.normal) }>
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to = {"/posts"} className = {(nav)=> (nav.isActive? style.active: style.normal) }>
                                Posts
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to = {"/favourites"} className = {(nav)=> (nav.isActive? style.active: style.normal) }>
                                Favourites
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to = {"/profile"} className = {(nav)=> (nav.isActive? style.active: style.normal) }>
                               Profile
                            </NavLink>
                        </Nav.Link>
                        {/* <NavDropdown title="Post Details" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink to ={"/"}/>
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
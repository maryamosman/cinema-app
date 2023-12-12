import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="navbarmenu">
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" id="nav">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
            <Link to={"/shop"} className="nav-link">
              Shop
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;

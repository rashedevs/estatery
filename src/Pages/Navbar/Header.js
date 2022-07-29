import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar className="fs-6 fw-bolder" bg="light" expand="lg">
      <Container fluid>
        <img
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png"
          style={{ height: "30px" }}
          alt="lhome logo"
        />
        <Navbar.Brand className="mx-3" href="#">
          Estatery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="mx-3" href="rent">
              Rent
            </Nav.Link>
            <Nav.Link className="mx-3" href="buy">
              Buy
            </Nav.Link>
            <Nav.Link className="mx-3" href="sell">
              Sell
            </Nav.Link>
            <NavDropdown
              className="mx-3"
              title="Manage Property"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="mx-3"
              title="Resources"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button className="mx-2" variant="outline-success">
            Login
          </Button>
          <Button className="mx-2" variant="primary">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

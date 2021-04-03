import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'


function NavBar(){
return (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">KotaBazar</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Subscription" id="basic-nav-dropdown" disabled>
          <NavDropdown.Item href="#action/1.1">
            All subscription
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/1.2">My subcirption</NavDropdown.Item>
          <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="/products">Groceries</NavDropdown.Item>
          <NavDropdown.Item href="/products">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="/products">Home Decor</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Deals" id="basic-nav-dropdown" disabled>
          <NavDropdown.Item href="#action/3.1">Hot deals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Discount Coupons
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Festive Deals</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  </div>
);


}


export default NavBar;
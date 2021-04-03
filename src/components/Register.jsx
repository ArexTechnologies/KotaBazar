import React, { useState } from "react";

import { Form, Button, Col,Row } from "react-bootstrap";

function Register() {
  return (
      <div >
      <h1 className="customSpacing">Resgiteration page</h1>
      <div>
        <div className="logincard ">
          <div className="centralise    ">
            <Form>
              <Form.Label>Name</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Form.Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                     
                      <option>Kota</option>
                      <option>Jaipur</option>
                      <option>Udaipur</option>
                      <option>Jodhpur</option>
                    </Form.Control>

                    {/*
                     */}

                    
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Rajasthan</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
              </Form.Group>
              <div className="allignC">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

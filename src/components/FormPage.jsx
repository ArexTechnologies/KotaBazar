import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Image,
  NavLink,
} from "react-bootstrap";
import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
// import Register from "./Register"




function FormPage() {
   const [click , setClick]= useState();
    if(click===true){
      setClick(true);
    }
  
    return (
      <div>
        <NavBar />
        <div className="logincard">
          <div className="centralise">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="allignC">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br />
                or
                <br />
                <div>
                  <Button
                    onClicke={click}
                    href="/register"
                    variant="primary"
                  >
                    Social MEdia
                  </Button>
                  {/* <nav className="nav-links">
                  <Link to="/Register"  >Sign in with google</Link> 
                  </nav>
                   */}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }

export default FormPage;

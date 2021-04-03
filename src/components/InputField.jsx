import React, {useState} from 'react';
import{Form, Button} from 'react-bootstrap'
// import { Redirect } from 'react-router';
 import Register from "./Register"
 


function InputField(props){
 
  const [isAuth, setIsAuth] = useState(false);
   
  const clickHandle = () => {
    
    return setIsAuth(true);
     
    }
  if (isAuth === false) {
    return (
      <div>
        <div className="logincard">
          <div className="centralise">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
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
                <p>or sign up</p>

                <div>
                  <Button
                    onClick={clickHandle}
                    // href="/register"
                    value={isAuth}
                    variant="primary"
                  >
                    Sign up
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
  } else {
    return <div><Register/>x</div>;
  }
 
  
  
}

export default InputField;

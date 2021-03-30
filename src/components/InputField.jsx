import React from 'react';
import{Form, Button} from 'react-bootstrap'
 
const daButton = props => {
    const handleClick = () => {
      if (props.onClick) {
        props.onClick(props.value);
      }
    }
    
  }


function InputField(props){
    
    
  

return (
<div>


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
                   onClick={handleClick}  
                    // href="/register"
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



)


}
const handleClick = value => () => console.log(value)

export default InputField;
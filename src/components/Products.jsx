import React from 'react';
import NavBar from './NavBar';
import { Col,Row, Container } from 'react-bootstrap'
import Item from './Item'


function Products(){
    return (
      <div>
        <NavBar />
        <Container style={{ marginTop: "5rem" , marginBottom: "5rem" }} fluid="sm">
          <Row>
            <Col>
              <Item />
            </Col>
            <Col>
              {" "}
              <Item />
            </Col>
            <Col>
              <Item />
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Item />
            </Col>
            <Col>
              {" "}
              <Item />
            </Col>
            <Col>
              <Item />
            </Col>
          </Row>
        </Container>
      </div>
    );
        

}



export default Products;
import React from "react";
import { Card, Button } from "react-bootstrap";
import Img from "../sabji/potato.jpeg";


function Item() {
  return (
    <div>
      <i className="fas fa-shopping-cart"></i>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>Fresh Afghani Potato</Card.Title>
          <p>Price : 12/kg</p>
          <Card.Text>
            Impoerted directly from Afghanistan with its own Aroma adding more
            taste to your meal
          </Card.Text>
          <Button href="/" variant="primary">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

import React, { useState } from "react";
import { Button,Card } from 'react-bootstrap';
const Volunteer = () => {
  
  const product = [{"name":"h1"},{"name":"h2"},{"name":"h3"},{"name":"h4"},];
  
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cards">
        {product.map(item=>(
            
                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
        ))}
     
    </div>
  );
};

export default Volunteer;


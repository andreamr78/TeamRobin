import { error } from 'console';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function InfoCards(data:any) {
    var newValue = parseFloat(data.data.price + (Math.random()*500)).toFixed(2);
  return (
    <div>

        <div>
            <Card.Img variant="top" src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Link_Airways_%28VH-VEC%29_Saab_340B%2C_in_Link_Airways_livery%2C_at_Wagga_Wagga_Airport.jpg'/>
            <Card.Body>
                <Card.Title>{data.data.city}, {data.data.country}</Card.Title>
                <Card.Text>
                    {data.data.description == '' ? 'No data available': data.data.description}
                    <h3>price: ${newValue}</h3>
                </Card.Text>
            </Card.Body>
            </div>
    </div>
  )
}

export default InfoCards

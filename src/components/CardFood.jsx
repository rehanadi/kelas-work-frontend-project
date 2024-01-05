import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const CardFood = ({ item }) => {
  return (
    <Card>
      <img
        alt={item.name}
        src={item.img}
      />
      <CardBody>
        <CardTitle tag="h5">
          {item.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Price: $ {item.price}
        </CardSubtitle>
        <CardText>
          {item.dsc}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default CardFood
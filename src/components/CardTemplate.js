import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';


class CardTemplate extends Component {

      render () {
        let {  name, img } = this.props.person;
        return (
          <div>
            <br /><br /><br />
            <Card className="clientele-card">
                { console.log(img)}
              <CardImg height= "150vw" top width="100%"  src={img} alt="Card image cap" ></CardImg>
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText></CardText>
              </CardBody>
            </Card>
          </div>
        )
      }
}

export default CardTemplate;
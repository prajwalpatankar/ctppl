import React, { Component } from 'react';
import {
    Card, CardImg
  } from 'reactstrap';


class CardTemplate extends Component {

      render () {
        let {  img } = this.props.person;
        return (
          <div>
            <br /><br /><br />
            <Card className="clientele-card">
              <CardImg height= "120vw" top width="100%"  src={img} alt="Image Unavailable" ></CardImg>
              {/* <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>abcd</CardText>
              </CardBody> */}
            </Card>
          </div>
        )
      }
}

export default CardTemplate;
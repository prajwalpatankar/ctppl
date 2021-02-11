import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


class CardTemplate extends Component {
    constructor(props) {
        super(props);
      }
      render () {
        let { id, name, img } = this.props.person;
        return (
          <div>
            <br /><br /><br />
            <Card className="clientele-card">
                { console.log(img)}
              <CardImg height= "150vw" top width="100%"  src={img} alt="Card image cap" ></CardImg>
              <CardBody>
                <CardTitle>{name}</CardTitle>
                {/* <CardSubtitle>{company}</CardSubtitle> */}
                {/* <CardText>{description}</CardText> */}
                {/* <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button> */}
              </CardBody>
            </Card>
          </div>
        )
      }
}

export default CardTemplate;
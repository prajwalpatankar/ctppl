import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap';


class NoImageCard extends Component {

    render() {
        let { name, desc } = this.props.person;
        return (
            <div>
                <br /><br /><br />
                
                <Card className="clientele-card">
                    <CardBody>
                        <CardTitle><strong>{name}</strong></CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>{desc}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default NoImageCard;
import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap';


class ProjectCard extends Component {

    render() {
        let { name, desc, img } = this.props.person;
        return (
            <div>
                <br /><br /><br />
                
                <Card className="clientele-card">
                    <CardImg height="250vw" top width="125vw" src={img} alt="Image Unavailable" ></CardImg>
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

export default ProjectCard;
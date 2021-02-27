import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import NoImageCard from './NoImageCard';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class OnGoing extends Component {
    constructor() {
        super();
        this.state = {
            industrial: [
                {
                    id: 5,
                    name: "Sudarshan Chemicals Ltd., Mahad",
                    type: 1, 
                    desc : "Industrial Sheds | Cost - 500 Lacs ",
                    img: "" 
                },
                {
                    id: 6,
                    name: "Sudarshan Chemicals Ltd., Roha",
                    type: 2, 
                    desc : "Industrial Sheds| Cost - 800 Lacs ",
                    img: "" 
                },
            ],
            residential: [
                {
                    id: 1,
                    name: "Parkland, Pune",
                    type: 2, 
                    desc : "For Yashvastu Developers. | Area - 5,00,000sq.ft | Cost - 4250 Lacs | Consultant -Fidesto Projects Pvt. Ltd",
                    img: "assets/img/projects/Parkland-New-190719.jpg"
                },
                {
                    id: 2,
                    name: "Godrej Elements, Pune",
                    type: 2, 
                    desc : "Residential projects | cost- 1021 Lacs | consultant- Kapadia Associates, | Location- Hinjewadi Pune",
                    img: "assets/img/projects/Godrej-elements.jpg"
                },
                {
                    id: 3,
                    name: "Madhukosh, Pune",
                    type: 2, 
                    desc : "Residential Project | Area: 1,50,000 sq. ft | Cost: 1471 Lacs | Architect: Nitin Joshi | Client: Fidesto Projects Private Limited | PMC: FABS | Location: Balewadi, Pune",
                    img: "assets/img/projects/Madhukosh-Balewadi-ongoing.jpg"
                },
                {
                    id: 4,
                    name: "Godrej Greens, Pune",
                    type: 2, 
                    desc : "Residential Project | Finishing Work | Cost: 1000 Lacs | Client: Godrej Properties Limited | Location: Kondhwa, Pune",
                    img: "assets/img/projects/Madhukosh-Balewadi-ongoing.jpg" //add photo
                },
            ],
            itbuildings: [
            ],
            mep: [
                
            ]
        }
    }


    render() {
        let industrial = this.state.industrial.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        // let institutional = this.state.institutional.map(person => {
        //     if(person.img !== "") {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <ProjectCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        //     else {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <NoImageCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        // })
        let residential = this.state.residential.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
        // let itbuildings = this.state.itbuildings.map(person => {
        //     if(person.img !== "") {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <ProjectCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        //     else {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <NoImageCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        // })
        // let mep = this.state.mep.map(person => {
        //     if(person.img !== "") {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <ProjectCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        //     else {
        //         return (
        //             <Col lg="4" md= "12" sm= "12" data-aos="fade-up">
        //                 <NoImageCard key={person.id} person={person} />
        //             </Col>
        //         )
        //     }
        // })
        return (
            <div className="clientele" data-aos="fade-up" >
                <br />
                <h1><strong data-aos="fade-up">Industrial</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {industrial}                        
                    </Row>
                </Container>
                {/* <br /><hr /><br />                                      uncomment in case of new institutional project
                <h1><strong data-aos="fade-up">Institutional</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {institutional}                        
                    </Row>
                </Container> */}
                <br /><hr /><br />
                <h1><strong data-aos="fade-up">Residential</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {residential}                        
                    </Row>
                </Container>
                <br /><hr /><br />
                {/* <h1><strong data-aos="fade-up">IT Buildings</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {itbuildings}                        
                    </Row>
                </Container>
                <br /><hr /><br /> */}
                {/* <h1><strong data-aos="fade-up">MEP Projects</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {mep}                        
                    </Row>
                </Container> */}
                <br /><br />
            </div>
            
        )
    }
}



export default OnGoing;
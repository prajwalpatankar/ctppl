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
                    id: 1,
                    name: "Exide Industries Ltd, Taloja",
                    type: 1, 
                    desc : "UGWT & Road, | Cost - 107 Lacs, | Consultant - PK Associates, | Location - Taloja",
                    img: "assets/img/projects/ongoing/Exide-Indus-Taloja-site-107Lacs.jpg"
                },
                {
                    id: 2,
                    name: "WalMart India Private Limited, Tirupati",
                    type: 1, 
                    desc : "Area - 75600 sq.ft., | Cost - 764 Lacs, | Architect-Framework Interiors, PMC- JLL, | Location-Tirupati, Andhra Pradesh",
                    img: "assets/img/projects/ongoing/Walmart-tirupati-764lacs.jpeg"
                },
                {
                    id: 2,
                    name: "Mahindra Vehicle Manufactures Ltd. Pune",
                    type: 1, 
                    desc : "Industrial Project | Area: 50,400 sq. ft | Cost: 6,82,00,000/- | Architect: Edifice Consultants Pvt. Ltd. (Edifice) | Client: Mahindra Vehicle Manufacturers Ltd (MVML) | PMC: Tata Consulting Engineers Limited. (TCE) | Location: MIDC Chakan-Pune",
                    img: "assets/img/projects/ongoing/Mahindra-for-ongoing.jpg"
                },
                {
                    id: 3,
                    name: "Wirtgen India Pvt Ltd. Pune",
                    type: 1,
                    desc : "Industrial Project | Area: 2,15,280.00 sq. ft | Cost -1165 Lacs | Architect: Venkataramanan Associates | Client: Wirtgen India pvt Ltd | PMC: AMS Consultant | Location: Yavat Pune",
                    img: "assets/img/projects/ongoing/Wirtgen.jpeg"
                },
                {
                    id: 4,
                    name: "Century Rayon, Kalyan",
                    type: 1, 
                    desc : "Industrial projects | Area – 53,800sqft | Cost- 885 Lacs | Architect- Lele and Associates | Location- Kalyan",
                    img: "assets/img/projects/ongoing/Century-Rayon.jpeg"
                },
            ],
            residential: [
                {
                    id: 5,
                    name: "Parkland, Pune",
                    type: 2, 
                    desc : "For Yashvastu Developers. | Area - 5,00,000sq.ft | Cost - 4250 Lacs | Consultant -Fidesto Projects Pvt. Ltd",
                    img: "assets/img/projects/ongoing/Parkland-New-190719.jpg"
                },
                {
                    id: 6,
                    name: "Godrej Elements, Pune",
                    type: 2, 
                    desc : "Residential projects | cost- 1021 Lacs | consultant- Kapadia Associates, | Location- Hinjewadi Pune",
                    img: "assets/img/projects/ongoing/Godrej-elements.jpg"
                },
                {
                    id: 7,
                    name: "Profile Empyrean, Pune",
                    type: 2, 
                    desc : "Residential Project Area- 1,00,000 Sqft cost- 1 1,80,00,000/- Architect- Ankur Associates Consultant- Fidesto Projects Pvt. Ltd. Location- Pashan, Pune",
                    img: "assets/img/projects/ongoing/Profile-Empyrean-Ongoing.jpg"
                },
                {
                    id: 8,
                    name: "Krishna Sankul, Kolhapur",
                    type: 2, 
                    desc : "Commercial Projects | Area- 7300 Sqft | cost- 250 Lacs | Architect- Vishwanath Musale | Consultant- Ravi patil | Location- Kolhapur",
                    img: "assets/img/projects/ongoing/Krishna-sankul-Ongoing.jpg"
                },
                {
                    id: 9,
                    name: "Xrbia Abode Developers Pvt Ltd. Pune",
                    type: 2, 
                    desc : "Cost - 300 Lacs, | Location-Ambhi Pune.",
                    img: "assets/img/projects/ongoing/Xrbia-Ambhi-site-Concrete-road-.jpg"
                },
                {
                    id: 10,
                    name: "Xrbia Abode Developers Pvt Ltd., Pune",
                    type: 2, 
                    desc : "Cost - 250 Lacs, | Location-Jambhul Pune.",
                    img: "assets/img/projects/ongoing/Xrbia-Jambhul-site-Concrete-road-.jpg"
                },
                {
                    id: 11,
                    name: "Madhukosh, Pune",
                    type: 2, 
                    desc : "Residential Project | Area: 1,50,000 sq. ft | Cost: 1471 Lacs | Architect: Nitin Joshi | Client: Fidesto Projects Private Limited | PMC: FABS | Location: Balewadi, Pune",
                    img: "assets/img/projects/ongoing/Madhukosh-Balewadi-ongoing.jpg"
                },
            ],
            itbuildings: [
                {
                    id: 12,
                    name: "Advansys, Hinjewadi, Pune",
                    type: 3, 
                    desc : "Area-50,000 Sqft | cost Rs.9,52,73,031/- | Architect- Dandekar and Associate | Consultant-Dandekar and Associate | Location- Hinjewadi, Pune",
                    img: "assets/img/projects/ongoing/Advansys-Ongoing.jpg"
                },
            ],
            mep: [
                {
                    id: 13,
                    name: "Gumtree Traps Pvt Ltd., Goa",
                    type: 4, 
                    desc : "Area - 5,500 sqft, | Cost -48 Lacs, | Architect -EXCELARCH Architects & Engineers, |Location - GOA,INDIA",
                    img: ""
                },
                {
                    id: 14,
                    name: "Wirtgen India Pvt Ltd., Pune",
                    type: 4, 
                    desc : "Area - 2,15,280.00 sqft, | Cost - 1.5 crore, | Architect - Venkataramanan Associates, PMC - AMS Consultant, | Location - Yavat Pune.",
                    img: ""
                },
            ]
        }
    }


    render() {
        let industrial = this.state.industrial.map(person => {
            return (
                <Col lg="6" md= "12" sm="12">
                    <ProjectCard key={person.id} person={person} />
                </Col>
            )
        })
        // let institutional = this.state.institutional.map(person => {
        //     return (
        //         <Col lg="6" md= "12" sm="12">
        //             <ProjectCard key={person.id} person={person} />
        //         </Col>
        //     )
        // })
        let residential = this.state.residential.map(person => {
            return (
                <Col lg="6" md= "12" sm="12">
                    <ProjectCard key={person.id} person={person} />
                </Col>
            )
        })
        let itbuildings = this.state.itbuildings.map(person => {
            return (
                <Col lg="6" md= "12" sm="12">
                    <ProjectCard key={person.id} person={person} />
                </Col>
            )
        })

        let mep = this.state.mep.map(person => {
            if(person.img !== "") {
                return (
                    <Col lg="6" md= "12" sm="12">
                        <ProjectCard key={person.id} person={person} />
                    </Col>
                )
            }
            else {
                return (
                    <Col lg="6" md= "12" sm="12">
                        <NoImageCard key={person.id} person={person} />
                    </Col>
                )
            }
        })
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
                <h1><strong data-aos="fade-up">IT Buildings</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {itbuildings}                        
                    </Row>
                </Container>
                <br /><hr /><br />
                <h1><strong data-aos="fade-up">MEP Projects</strong></h1>
                <Container fluid data-aos="fade-up" data-aos-delay="200">
                    <Row>                        
                        {mep}                        
                    </Row>
                </Container>
                <br /><br />
            </div>
            
        )
    }
}



export default OnGoing;
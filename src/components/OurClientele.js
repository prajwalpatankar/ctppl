import React, { Component } from 'react';
import CardTemplate from './CardTemplate';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import Footer from './sections/Footer';

class OurClientele extends Component {
    constructor() {
        super();
        this.state = {
            people: [
                {
                    id: 56,
                    name: "",
                    img: "assets/img/clients/garware.jpeg"
                },
                {
                    id: 1,
                    name: "",
                    img: "assets/img/clients/John-Deere.jpg"
                },
                {
                    id: 2,
                    name: "",
                    img: "assets/img/clients/Fiat.jpg"
                },
                // {
                //     id: 3,
                //     name: "",
                //     img: "assets/img/clients/Kumar.jpg"
                // },
                {
                    id: 4,
                    name: "",
                    img: "assets/img/clients/LG.jpg"
                },
                {
                    id: 5,
                    name: "",
                    img: "assets/img/clients/Rucha-Group.jpg"
                },
                {
                    id: 6,
                    name: "",
                    img: "assets/img/clients/Crompton-Greaves.jpg"
                },
                {
                    id: 7,
                    name: "",
                    img: "assets/img/clients/Phoenix-Macano.jpg"
                },
                {
                    id: 8,
                    name: "",
                    img: "assets/img/clients/KPIT.jpg"
                },
                {
                    id: 9,
                    name: "",
                    img: "assets/img/clients/Tetra-Pak.jpg"
                },
                {
                    id: 10,
                    name: "",
                    img: "assets/img/clients/Goel-Ganga.jpg"
                },
                {
                    id: 11,
                    name: "",
                    img: "assets/img/clients/Panchashil.jpg"
                },
                {
                    id: 12,
                    name: "",
                    img: "assets/img/clients/Mecc-alte.jpg"
                },
                {
                    id: 13,
                    name: "",
                    img: "assets/img/clients/Tredegar.jpg"
                },
                {
                    id: 14,
                    name: "",
                    img: "assets/img/clients/Pari.jpg"
                },
                {
                    id: 15,
                    name: "",
                    img: "assets/img/clients/Eaton.jpg"
                },
                {
                    id: 16,
                    name: "",
                    img: "assets/img/clients/Dana.jpg"
                },
                {
                    id: 17,
                    name: "",
                    img: "assets/img/clients/Spicer.jpg"
                },
                {
                    id: 18,
                    name: "",
                    img: "assets/img/clients/Seco.jpg"
                },
                {
                    id: 19,
                    name: "",
                    img: "assets/img/clients/Polyplastics.jpg"
                },
                {
                    id: 20,
                    name: "",
                    img: "assets/img/clients/kul_logo.jpg"
                },
                {
                    id: 21,
                    name: "",
                    img: "assets/img/clients/alfalaval_logo.jpg"
                },
                {
                    id: 22,
                    name: "",
                    img: "assets/img/clients/Avery-Dennision.jpg"
                },
                {
                    id: 23,
                    name: "",
                    img: "assets/img/clients/bits_logo.jpg"
                },
                {
                    id: 24,
                    name: "",
                    img: "assets/img/clients/B-K-Birla.jpg"
                },
                {
                    id: 25,
                    name: "",
                    img: "assets/img/clients/Century.jpg"
                },
                {
                    id: 26,
                    name: "",
                    img: "assets/img/clients/Advansys.jpg"
                },
                {
                    id: 27,
                    name: "",
                    img: "assets/img/clients/consolidated_logo.jpg"
                },
                {
                    id: 28,
                    name: "",
                    img: "assets/img/clients/fabs_logo.jpg"
                },
                {
                    id: 29,
                    name: "",
                    img: "assets/img/clients/fidesto_logo.jpg"
                },
                {
                    id: 30,
                    name: "",
                    img: "assets/img/clients/Helvoet-Pharma.jpg"
                },
                {
                    id: 31,
                    name: "",
                    img: "assets/img/clients/Mahindra-Intertrade.jpg"
                },
                {
                    id: 32,
                    name: "",
                    img: "assets/img/clients/yashvastu_logo.jpg"
                },
                {
                    id: 33,
                    name: "",
                    img: "assets/img/clients/venkatesh_logo.jpg"
                },
                {
                    id: 34,
                    name: "",
                    img: "assets/img/clients/anand_logo.jpg"
                },
                {
                    id: 35,
                    name: "",
                    img: "assets/img/clients/exide_logo.jpg"
                },
                {
                    id: 36,
                    name: "",
                    img: "assets/img/clients/kelloggs_logo.jpg"
                },
                {
                    id: 37,
                    name: "",
                    img: "assets/img/clients/AAIPL.jpg"
                },
                {
                    id: 38,
                    name: "",
                    img: "assets/img/clients/service_logo.jpg"
                },
                {
                    id: 39,
                    name: "",
                    img: "assets/img/clients/AMS.png"
                },
                {
                    id: 40,
                    name: "",
                    img: "assets/img/clients/cbre-300x120.jpg"
                },
                {
                    id: 41,
                    name: "",
                    img: "assets/img/clients/cushman-weiklfield-300x103.png"
                },
                {
                    id: 42,
                    name: "",
                    img: "assets/img/clients/Gayatri.jpg"
                },
                {
                    id: 43,
                    name: "",
                    img: "assets/img/clients/Godrej-Mamuradi-300x152.png"
                },
                {
                    id: 44,
                    name: "",
                    img: "assets/img/clients/Gumtree.png"
                },
                {
                    id: 45,
                    name: "",
                    img: "assets/img/clients/JLL-300x133.png"
                },
                {
                    id: 46,
                    name: "",
                    img: "assets/img/clients/Mahindra-logo-2560x1440-300x169.png"
                },
                {
                    id: 47,
                    name: "",
                    img: "assets/img/clients/profile-empe-300x140.jpg"
                },
                {
                    id: 48,
                    name: "",
                    img: "assets/img/clients/shimuzu-300x99.jpg"
                },
                {
                    id: 49,
                    name: "",
                    img: "assets/img/clients/tata-logo-300x275.png"
                },
                {
                    id: 50,
                    name: "",
                    img: "assets/img/clients/Walmart_logo.svg_-300x75.png"
                },
                {
                    id: 51,
                    name: "",
                    img: "assets/img/clients/WIRTGEN.jpg"
                },
                {
                    id: 52,
                    name: "",
                    img: "assets/img/clients/xrbia-300x300.jpeg"
                },
                {
                    id: 53,
                    name: "",
                    img: "assets/img/clients/Century-Adity-birla-logo.jpg"
                },
                {
                    id: 54,
                    name: "",
                    img: "assets/img/clients/PROCONVIS.png"
                },
                {
                    id: 55,
                    name: "",
                    img: "assets/img/clients/Kakkad-group-300x95.png"
                },

            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    removePerson(id) {
        this.setState({ people: this.state.people.filter(person => person.id !== id) });
    }

    BackToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    render() {
        let peopleCards = this.state.people.map(person => {
            return (
                <Col lg="2" md="4" sm="6">
                    <CardTemplate key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
                </Col>
            )
        })
        return (
            <div>
                <div className="clientele section-bg" data-aos="fade-up" >
                    <br /><br /><br /><br /><br /><br />
                    <div className="section-title">
                        <h2 className="page-title ">Our Clients</h2>
                        <h6 className="title-description">Providing Services to leading brands</h6>
                    </div>
                    <Container fluid data-aos="fade-up" data-aos-delay="200">
                        <Row>
                            {peopleCards}
                        </Row>
                    </Container>
                    <br /><br />

                </div>
                <button className="back-to-top" onClick={this.BackToTop}><i className="ri-arrow-up-line"></i></button>
                <Footer />
            </div>
        )
    }
}


export default OurClientele;
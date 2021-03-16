import React, { Component } from 'react';
// import ReactNavbar from "react-responsive-animate-navbar";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from './../logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';

class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
        if (window.innerWidth < 1000) {
            this.state = { isMobile: true };
        }
    }
    componentDidMount() {
        window.addEventListener('resize', () => {   //check screensize
            this.setState({
                isMobile: window.innerWidth < 1000
            });
        }, false);
    }

    render() {
        if (this.state.isMobile) {
            return (
                <div>
                    <Navbar fixed="top" bg="white" expand="lg">
                        <Navbar.Brand><Link to="/"><img src="assets/img/final_logo_PNG.png" alt="pctppl_logo" height="60px" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto mobile-nav-ul-pp">
                                <Nav.Link><Link to="/"><h6>Home</h6></Link></Nav.Link>
                                <Nav.Link><Link to="/AboutUs"><h6>About Us</h6></Link></Nav.Link>
                                <Nav.Link><Link to="/OurPolicies"><h6>Our Policies</h6></Link></Nav.Link>
                                <Nav.Link><Link to="/OurServices"><h6>Our Services</h6></Link></Nav.Link>
                                <Nav.Link><Link to="/OurClientele"><h6>Our Clientele</h6></Link></Nav.Link>
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/Projects:1"><h6>Completed Projects</h6></Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/Projects:0"><h6>On Going Projects</h6></Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/ContactUs:1"><h6>Get in touch</h6></Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/ContactUs:0"><h6>Career with us</h6></Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
        else {

            return (
                <div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                            <h1 className="logo mr-auto"><Link to="/"><img src="assets/img/final_logo_PNG.png" alt="pctppl_logo"></img></Link></h1>
                            <nav className="nav-menu d-none d-lg-block">
                                <ul>
                                    <li className="nav-item"><Link to="/">Home</Link></li>
                                    <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
                                    <li className="nav-item"><Link to="/OurPolicies">Our Policies</Link></li>
                                    <li className="nav-item"><Link to="/OurServices">Our Services</Link></li>
                                    <li className="nav-item"><Link to="/OurClientele">Our Clientele</Link></li>
                                    <li className="drop-down"><Link to="/Projects:1">Projects</Link>
                                        <ul>
                                            <li><Link to="/Projects:1">Completed Projects</Link></li>
                                            <li><Link to="/Projects:0">On Going Projects</Link></li>
                                        </ul>
                                    </li>
                                    <li className="drop-down"><Link to="/ContactUs:1">Contact Us</Link>
                                        <ul>
                                            <li><Link to="/ContactUs:1">Get in touch</Link></li>
                                            <li><Link to="/ContactUs:0">Career with us</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>


            );
        }
    }
}

export default Navbar1;
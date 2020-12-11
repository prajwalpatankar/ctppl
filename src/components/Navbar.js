import React, { Component } from 'react';
import ReactNavbar from "react-responsive-animate-navbar";
import { Link } from 'react-router-dom';
import logo from './../logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
        if (window.innerWidth < 1200) {
            this.state = { isMobile: true };
        }
    }
    componentDidMount() {
        window.addEventListener('resize', () => {   //check screensize
            this.setState({
                isMobile: window.innerWidth < 1200
            });
        }, false);
    }
    render() {
        return (
            // <div className="container">
            //     <div className="nav-container">
            //         <br ></br><img src={logo} className="logo float-left" alt="logo"></img><br /><br /><br /><br />
            //         <h6 className="float-left">SYMBOL OF PASSION. CATALYST OF GROWTH</h6><br /><br />
            //         <nav className="navbar navbar-expand-lg navbar-light bg-teal">
            //             <span className="navbar-toggler no-outline" data-toggle="collapse">Menu</span>
            //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //             <div className="collapse navbar-collapse" id="navbarNavDropdown">
            //                 <ul className={`${this.state.isMobile ? ' navbar-nav  row' : 'navbar-nav row navbar-ul'}`}> 
            //                     <li className="nav-item"><Link to="/">Home</Link></li>
            //                     <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
            //                     <li className="nav-item"><Link to="/OurPolicies">Our Policies</Link></li>
            //                     <li className="nav-item"><Link to="/OurServices">Our Services</Link></li>
            //                     <li className="nav-item"><Link to="/OurClientele">Our Clientele</Link></li>
            //                     <li className="nav-item"><Link to="/OnGoing">On Going Projects</Link></li>
            //                     <li className="nav-item"><Link to="/Completed">Completed Projects</Link></li>
            //                     <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
            //                 </ul>
            //             </div>
            //         </nav>
            //     </div>
            // </div>



            //     <div className="container-fluid">
            //     <div className="nav-container">

            //         <img src={logo} className="logo float-left" alt="logo"></img>
            //         <nav className=" float-right navbar navbar-expand-lg navbar-light">
            //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            //                 <span className="navbar-toggler-icon"></span>
            //             </button>
            //             <div className="collapse navbar-collapse" id="navbarNavDropdown">
            //                 <ul className={`${this.state.isMobile ? ' navbar-nav  row' : 'navbar-nav row navbar-ul'}`}> 
            //                     <li className="nav-item"><Link to="/">Home</Link></li>
            //                     <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
            //                     <li className="nav-item"><Link to="/OurPolicies">Our Policies</Link></li>
            //                     <li className="nav-item"><Link to="/OurServices">Our Services</Link></li>
            //                     <li className="nav-item"><Link to="/OurClientele">Our Clientele</Link></li>
            //                     <li className="nav-item"><Link to="/OnGoing">On Going Projects</Link></li>
            //                     <li className="nav-item"><Link to="/Completed">Completed Projects</Link></li>
            //                     <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
            //                 </ul>
            //             </div>
            //         </nav>
            //         &nbsp;<br />&nbsp;&nbsp;<br />&nbsp;   
            //     </div>
            // </div>
            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center">
                        <h1 class="logo mr-auto"><a href="index.html">CTPPL</a></h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo --></div>
                <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                        <nav class="nav-menu d-none d-lg-block">
                            <ul>
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
                                <li className="nav-item"><Link to="/OurPolicies">Our Policies</Link></li>
                                <li className="nav-item"><Link to="/OurServices">Our Services</Link></li>
                                <li className="nav-item"><Link to="/OurClientele">Our Clientele</Link></li>
                                <li className="drop-down"><a href="">Projects</a>
                                    <ul>
                                        <li><Link to="/Completed">Completed Projects</Link></li>
                                        <li><Link to="/OnGoing">On Going Projects</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
                            </ul>
                        </nav>
                        {/* <!-- .nav-menu --> */}

                    </div>
                </header>
            </div>


        );
    }
}

export default Navbar;
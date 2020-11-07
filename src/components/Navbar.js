import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: false};
        if(window.innerWidth<1200){
            this.state = {isMobile: true};
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
            <div className="container">
                <div className="nav-container">
                    <br ></br><img src={logo} className="logo float-left" alt="logo"></img><br /><br /><br /><br />
                    <h6 className="float-left">SYMBOL OF PASSION. CATALYST OF GROWTH</h6><br /><br />
                    <nav className="navbar navbar-expand-lg navbar-light bg-teal">
                        <span className="navbar-toggler no-outline" data-toggle="collapse">Menu</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className={`${this.state.isMobile ? ' navbar-nav  row' : 'navbar-nav row navbar-ul'}`}> 
                                <li className="nav-item"><Link to="/">Home</Link></li>
                                <li className="nav-item"><Link to="/AboutUs">About Us</Link></li>
                                <li className="nav-item"><Link to="/OurPolicies">Our Policies</Link></li>
                                <li className="nav-item"><Link to="/OurServices">Our Services</Link></li>
                                <li className="nav-item"><Link to="/OurClientele">Our Clientele</Link></li>
                                <li className="nav-item"><Link to="/OnGoing">On Going Projects</Link></li>
                                <li className="nav-item"><Link to="/Completed">Completed Projects</Link></li>
                                <li className="nav-item"><Link to="/ContactUs">Contact Us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class Footer extends Component {
    render() {
        return (

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>CTPPL</h3>
                                <p><a href="https://www.google.com/maps/place/Creative+Turnkey+Projects+Pvt,+Ltd/@18.4850216,73.7959744,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bfd3849df21d:0x299ed1dd59ae92fa!8m2!3d18.4850165!4d73.7981631" target="_blank" rel="noreferrer">
                                    spandan office no.8,<br />above state bank of india,<br /> opp. mai mangeshkar hospital,<br />Mumbai Bengluru bypass,<br />411 058, Warje, Pune, Maharashtra 411058
                                    </a><br /><br />
                                    <strong>Phone:</strong> +91 9767726744<br />
                                    <strong>Email:</strong> prakash.patankar@ctppl.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/AboutUs">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/OurServices">Our Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/OurClientele">Our Clientele</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/Projects">Projects</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/ContactUs">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">111</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">222</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">333</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">444</Link></li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="bx bx-chevron-right"></i> <Link to="/">555</Link></li>
                                </ul>
                            </div> */}

                            {/* <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Join Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action="" method="post">
                                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                    </form>
                                </div> */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <iframe className="footer-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9699220118614!2d73.79597441530792!3d18.485021575083994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd3849df21d%3A0x299ed1dd59ae92fa!2sCreative%20Turnkey%20Projects%20Pvt%2C%20Ltd!5e0!3m2!1sen!2sin!4v1613189018964!5m2!1sen!2sin" title="PCTPPL" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 
                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            &copy; Copyright <strong><span>PCTPPL</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made with ❤ by <Link to="https://github.com/prajwalpatankar"><strong><span>PCTPPL </span></strong>Web Team. <br /></Link>
                        </div>
                        
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to="/" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
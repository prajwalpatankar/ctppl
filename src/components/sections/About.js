import React, { Component } from 'react';
import '../../App.css'


class About extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2 className="page-title">About Us</h2>
                        <p></p>
                    </div>

                    <div className="row content">
                       
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Patankar's Creative Turnkey Projects Pvt. Ltd. delivers diverse turnkey projects within the stipulated time, moving the brand up with modern construction techniques with the help of
                                
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i>Wide range of advanced machineries</li>
                                <li><i className="ri-check-double-line"></i></li>
                            </ul>
                            
                        </div>
                        <div className="col-lg-6">
                            <p>
                            Supported by a strong backbone of employee resources in planning & design, engineering, project management and other key functions,  We work on Projects like
                             </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> Commercial, Residential, Institutional and IT building </li>
                                <li><i className="ri-check-double-line"></i> Land Development & Infra Projects </li>
                                <li><i className="ri-check-double-line"></i> Industrial Structures & Pre-Engineering Buildings</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default About;



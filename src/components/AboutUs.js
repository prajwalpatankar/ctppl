import React, { Component } from 'react';
import Counts from './sections/Counts';
import About from './sections/About';
import Footer from './sections/Footer';

class AboutUs extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    BackToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="ofl-hid">
                <br /><br /><br />
                <About />
                <Counts />
                <br /><br /><br />
                <div className="row" data-aos="fade-up">
                    <div className="col-md-2 col-sm-12">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-5 col-sm-12 vm-even"><br /><br />
                        <p>“Patankar's Creative Turnkey Projects Pvt. Ltd.”, erstwhile Creative Turnkey Projects Pvt. Ltd., provide our best of services in the fields of our kind. We are based in Pune, Maharashtra; providing our services all over India. With experience of over 3 decades by adopting high standard with latest construction technologies and competent management techniques, we are exceeding our client’s expectations during our each assignment. We believe our organisation's biggest assets are to maintain our high standards with an experienced, young, trained and skilful team members along with a dynamic approach for execution of each task. We pride on our vast and varied project portfolio that comprises residential, commercial, industrial, institutional buildings with MEP and Infra Projects.</p>
                    </div>
                    <div className="col-md-3 col-sm-12"><br />
                        <img src="assets/img/projects/tech_park.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/associated.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/kpit.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/Vantage.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="row" data-aos="fade-up">
                    <div className="col-md-2 col-sm-12">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-3 col-sm-12"><br />
                        <img src="assets/img/projects/Walmart-tirupati-764lacs.jpeg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/kellogs.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/bits.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                        <img src="assets/img/projects/birla.jpg" className="about-us-imgs" height="120px" alt="project_image" />
                    </div>
                    <div className="col-md-5 col-sm-12 vm-even">
                        <p>
                            We are specialised in Turnkey Projects, Industrial structures, Pre-Engineering Buildings (PEB), Mechanical Electrical and Piping (MEP Works) etc. We adopt customised approach to deliver real value to our clients. Our attitude during execution of our projects makes us stand out from other companies. Being a construction company, we understand our client’s requirement closely, and bring about relevant technology tools combined with practical plan of action to succeed in the goals of the project.
                            <br /><br />Patankar's Creative Turnkey Projects Pvt Ltd is dedicated to deliver quality projects along-with lifelong association. In order to meet client's prospective continuously and to be on top of their expectations, we constantly monitor latest technology trends and adopt them during execution of on-going projects. Our procedures also includes obeying laws, maintaining safety norms and giving on-Time delivery, security and feel of innovative infrastructure.
                        </p>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />
                <div className="section-title">
                    <h2 className="page-title">Our Leaders</h2>
                    <p>The backbone</p>
                </div><br /><br /><br />
                <div className="row" data-aos="fade-up">
                    <div className="col-md-2">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-4 col-sm-12 vm-even">
                        <img className="profile-photos" src="assets/img/team/pp.jpg" height="190px" width="190px" alt="prakash_patankar" /> <br /><br />
                        <h2>Prakash Patankar</h2>
                        <h6>D I R E C T O R</h6><br /><br /><br />
                        <p>With a reach experience of over 27+ years in infrastructure development / IT Companies / Institutional segments, Mr. Prakash Patankar focusing on innovation in design and energy efficiency. He plays pivotal roles in execution of the projects and also in creating futuristic, eco-safe structures that gracefully rise above the landscape. With a firm grip on the ground realities of the construction industry along-with his expertise indeed adds value to every projects. <br /><br />He is an excellent leader who continuously motivates our team to achieve new challenges. He plays an influential and prominent role in augmenting the product delivery levels of the company, attainment of superior standards of quality and client relationship management. </p>
                    </div>
                    <div className="col-md-4 col-sm-12 vm-even">
                        <img className="profile-photos" src="assets/img/team/DSC_4152a.jpg" height="190px" width="190px" alt="aniket_patankar" /> <br /><br />
                        <h2>Aniket Patankar</h2>
                        <h6>D I R E C T O R</h6><br /><br /><br />
                        <p>
                            Mr. Aniket Patankar is responsible for developing the strategic vision of the company, establishing the organisation's goals and objectives and directing the company towards its fulfilment. He focuses on the overall functioning of the companyn in particular, emphasizing on project execution, project delivery,  quality control, processes and customer satisfaction. <br /><br />He governs the performance of various departmemts in the organisation such as Project management, technology, timely delivery and value engineering. 
                        </p>
                    </div>
                    <div className="col-md-2">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br />
                <hr />
                <div className="section-title">
                    <h2 className="page-title">Certifications and Awards</h2>
                    <p> - </p>
                </div>
                <br /><br />
                <div className="row">


                    <div className="col-lg-12 col-xl-6">
                        <h6>Received appreciation from M/s. Phoenix Mecano India Pvt. Ltd. for <br /><strong>Valuable contribution towards construction.</strong> </h6>
                        <img src="assets/img/phoenix.png" alt="phoenix" height="400px"/>

                        <div className="row">
                            <div className="col-sm-6 "><br />
                                <h6>Appreciated by M/s. Exide Industries Limited as <br /><strong>Best Safety Contractor of the Year </strong></h6><br />
                                <img src="assets/img/safety.png" height="350px" alt="safety_award" />
                            </div>
                            <div className="col-sm-6"><br />
                                <h6>Received greatest appreciation  by M/s. Corning Technologies India Pvt. Ltd. for valuable support and participation for construction of Varale ZP School</h6>
                                <img src="assets/img/Corning.png" height="350px" alt="Corning" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-xl-6" >
                        <h6><br /><br />We are ISO 9001:2015 certified</h6>
                        <img src="assets/img/iso.png" alt="iso_certificate" height= "800px"/>
                    </div>


                </div>

                <br /><br />
                <hr />
                <div className="section-title">
                    <h2 className="page-title">Machinery Available</h2>
                    <p>List of Machinery Available with us</p>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-2 col-md-1">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-3 col-sm-12 vm-even">
                        <ul>
                            <li>Concrete Pump with Pipe Line – 4 Nos</li>
                            <li>Concrete Batching Plant – 5 Nos</li>
                            <li>Concrete Mixer (CRM 1400) – 10 Nos.</li>
                            <li>Concrete Mixer (7/10) – 10 Nos</li>
                            <li>Passenger/Material Lift – 3 Nos</li>
                            <li>Weigh Batcher – 10 Nos</li>
                            <li>Mini Lift – 15 Nos</li>
                            <li>Tough Riders – 6 Nos</li>
                            <li>DG Set – 10 Nos</li>
                            <li>Lab Equipment Set – 16 Nos</li>
                            <li>Bar Bending Machine – 20 Nos</li>
                            <li>Total Station – 4 Nos</li>
                            <li>Gas Cutting Machine – 8 Nos</li>
                            <li> Hydra – 4 Nos</li>
                            <li>Core Cutting Machine – 2 Nos</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 vm-even">
                        <ul>
                            <li>Theodolite – 4 Nos</li>
                            <li>Bar Cutting Machine – 20 Nos</li>
                            <li>Shuttering – Centring Material – 3,00,000 sq.ft.</li>
                            <li>Concrete Viberator – 50 Nos</li>
                            <li>Plate Compactor – 16 Nos</li>
                            <li>Auto Level – 16 Nos</li>
                            <li>Breaker – 15 Nos</li>
                            <li>Hammer Drill Machine – 20 Nos</li>
                            <li>Drill Machine – 25 Nos</li>
                            <li>Wheel Barrow – 100 Nos</li>
                            <li>Grinder Machine – 50 Nos</li>
                            <li>Welding Machine – 25 Nos</li>
                            <li>Pocklain – 4 Nos</li>
                            <li> Vibra Roller – 3 Nos</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 vm-even">
                        <ul>
                            <li>Ply Cutting Machine – 16 Nos</li>
                            <li>Electric Motor Pumps – 30 Nos</li>
                            <li>Fog Machine – 5 Nos</li>
                            <li>Lawn Cutting Machine – 1 No</li>
                            <li>Lift Machine – 7 Nos</li>
                            <li>Table Vibretor – 2 Nos</li>
                            <li>Mini Roller – 1 No</li>
                            <li>Block Cutting Machine – 3 Nos</li>
                            <li>Block Making Machine – 1 No</li>
                            <li>Floor Cleaning Machine – 1 No</li>
                            <li>Sand Screening Machine – 1 No</li>
                            <li>Mobile Tower Crane – 4 Nos</li>
                            <li>Tempo – 4 Nos</li>
                            <li>Dumper – 10 Nos</li>
                            <li>Trucks –  2 Nos</li>
                        </ul>
                    </div>
                    <br /><br /><br />


                </div>

                <button className="back-to-top" onClick={this.BackToTop}><i className="ri-arrow-up-line"></i></button>
                <Footer />
            </div>
        );
    }
}

export default AboutUs;
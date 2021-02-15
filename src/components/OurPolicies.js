import React, { Component } from 'react';
import Footer from './sections/Footer';

class OurPolicies extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <div className="section-title" data-aos="fade-up">
                    <h2 className="page-title ">Our Policies</h2>
                    <h6 className="title-description">-</h6>
                </div>




                <div className="row">
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-6 col-sm-12" data-aos="fade-up"><br />
                        <h3 className="vm-title vm-odd">Our Mission</h3>
                        <p className="vm-odd"><br />
                            TO MAXIMIZE THE ROI OF OUR VALUED CLIENTS BY DELIVERING OUTSTANDING PROJECTS THAT <br />SYMBOLIZE A FINE BLEND OF AESTHETICS, FUNCTIONALITY AND ENVIRONMENTAL CARE.
                            <br /><br />CREATIVE TURNKEY PROJECTS PVT. LTD. IS SPECIALIZING IN DELIVERING ENGINEERING & CONSTRUCTION SERVICES. CREATING NEW BENCHMARKS IN QUALITY AND PROFESSIONALISM, WE HAVE GROWN TO BE ONE OF PUNE’S LEADING TURNKEY PROVIDERS. AT CREATIVE TURNKEY PROJECTS, WE JUST DON’T BUILD CEMENT AND STEEL STRUCTURES; WE PASSIONATELY CREATE LANDMARKS THAT SYMBOLIZE QUALITY, RELIABILITY AND SAFETY.
                         </p>

                    </div>
                    <div className="col-md-4">
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" src="assets/img/m_v/mission.jpg" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                </div>





                <br /><br /><br /><br /><br /><br />
                <div className="row">
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-4">
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/vision.jpg" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 " data-aos="fade-up"><br /><br />
                        <h3 className="vm-title vm-even">Our Vision</h3>
                        <p className="vm-even"><br /><br />
                            TO EMERGE AS A MARKET LEADER BY NURTURING A CULTURE OF ETHICS AND EXCELLENCE. <br /><br /><br /><br /><br />
                        </p>
                    </div>
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>

                </div>











                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-6 col-sm-12 " data-aos="fade-up">
                        <h3 className="vm-title vm-odd">Quality Policy</h3>
                        <p className="vm-odd"><br /><br />
                            WE CREATIVE TURNKEY PROJECTS PVT.LTD. ARE IN THE FIELD OF CONSTRUCTION OF CIVIL & MEP WORK FOR CONSTRUCTION OF RESIDENTIAL, INDUSTRIAL AND COMMERCIAL SPACES.<br /><br />
                            WE ARE COMITTED TO DELIVER THE BEST PRODUCT TO THE SATISFACTION OF OUR VALUED CUSTOMERS.THE CONCERN OF QUALITY IS NURTURED AT EVERY LEVEL OUR WORK FORCE IS QULIFIED AND ADAPTED TO IMPROVISING IN QUALITY NEEDS.<br /><br />
                            AS STANDING ON STRONG FOUNDATION OF QUALIFICATION AND HAVING LONG EXPERIENCE, WE UNDERSTAND THAT EVERY DAY IS A NEW DAY FOR LEARNING WITHIN THE CONSTRUCTION INDUSTRY.WE WILL ABIDE BY ALL APPLICABLE STATUTORY AND REGULATORY REQUIREMENTS.<br /><br />
                            WITH THIS IN MIND AS AN EXPERIENCE WE PROVIDE TRAINING TO ALL STAFF MEMBERS, STARTING WITH THE DIRECTORS TO THE WORK FORCE, WHO TOO ARE ACTIVELY INVOLVED, ALONG WITH ALL EMPLOYEES, IN CONTRIBUTION TO QUALITY AND CONTINUAL IMPROVEMENT OF QUALITY MANAGEMENT SYSTEMS.
                    </p>
                    </div>
                    <div className="col-md-4">
                        <br /><br />
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/quality.jpg" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                </div>
            
                <br /><br /><br /><br /><br /><br />
                <div className="row">
                <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-4">
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/safety.jpg" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-md-6 col-sm-12 " data-aos="fade-up"><br />
                        <h3 className="vm-title vm-even">Environment, Health and <strong>Safety</strong></h3>
                        <p className="vm-even"><br /><br />
                            WE CREATIVE TURNKEY PROJECTS PVT. LTD. INTENDS TO MEET THESE COMMITMENTS BY ENSURING THAT SAFE WORKING PRACTICE AND PROCEDURES ARE ADOPTED, WHICH COMPLY WITH THE REQUIREMENT OF THE HEALTH AND SAFETY LEGISLATION AND STANDARD PRACTICES IN INDIA.

                            OUR TEAM IS BOUND TO TAKE CARE OF THEIR OWN AND OTHERS HEALTH AND MAINTAIN A SAFE ENVIRONMENT AT WORK.

                            ALL EMPLOYEES OF CREATIVE TURNKEY PROJECTS PVT. LTD .  ARE REQUIRED TO:

                            ENCOURAGE SAFE BEHAVING AMONG THEIR COLLEAGUES.
                            PARTICIPATE ACTIVELY IN SAFETY PROGRAM AND PUT THE REQUIRED KNOWLEDGE IN TO PRACTICE
                            FOLLOW DEFINED PROCEDURES WITH SELF-DISCIPLINE AND WORK SAFETY AT ALL TIMES.
                            TAKE APPROPRIATE ACTIONS TO PROTECT AIR, WATER AND ANIMAL & PLANET LIFE.
                        </p>
                    </div>
                    <div className="col-md-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br /><br /><br />
                <Footer />
            </div>
        );
    }
}

export default OurPolicies;
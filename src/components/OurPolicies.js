import React, { Component } from 'react';
import Footer from './sections/Footer';

class OurPolicies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            class1 : "vm-odd",
            class1_tit : "vm-title vm-odd",
            class2 : "vm-even",
            class2_tit : "vm-title vm-even",
         };
         if( window.innerWidth < 992 ) {
            this.state = {
                class1: "",
                class1_tit : "vm-title",
                class2 : "",
                class2_tit : "vm-title",
            };
        } else {
            this.state = {
                class1 : "vm-odd",
                class1_tit : "vm-title vm-odd",
                class2 : "vm-even",
                class2_tit : "vm-title vm-even",
            };
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener('resize', () => {   //check screensize
            if( window.innerWidth < 992 ) {
                this.setState({
                    class1: "",
                    class1_tit : "vm-title",
                    class2 : "",
                    class2_tit : "vm-title",
                });
            } else {
                this.setState({
                    class1 : "vm-odd",
                    class1_tit : "vm-title vm-odd",
                    class2 : "vm-even",
                    class2_tit : "vm-title vm-even",
                });
            }
        }, false);
    }
      
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br />
                <div className="section-title" data-aos="fade-up">
                    <h2 className="page-title ">Our Policies</h2>
                    <h6 className="title-description"> </h6>
                </div>
                <div className="row">
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-up"><br />
                        <h3 className={this.state.class1_tit}>Our Mission</h3>
                        <p className={this.state.class1}><br />
                        To maximize the ROI of our valued clients by delivering outstanding projects that <br />Symbolize a fine blend of aesthetics, functionality and environmental care.
                            <br /><br />Patankar's Creative Turnkey Projects Pvt. Ltd. Is specializing in delivering engineering & construction services. Creating new benchmarks in quality and professionalism, we have grown to be one of pune’s leading turnkey providers. At creative turnkey projects, we just don’t build cement and steel structures; We passionately create landmarks that symbolize quality, reliability and safety.
                        </p>

                    </div>
                    <div className="col-lg-4">
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" src="assets/img/m_v/mission.jpg" className="img-fluid" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-lg-4">
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/vision.jpg" className="img-fluid" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-lg-6 col-sm-12 " data-aos="fade-up"><br /><br />
                        <h3 className={this.state.class2_tit}>Our Vision</h3>
                        <p className={this.state.class2}><br /><br />
                        To emerge as a market leader by nurturing a culture of ethics and excellence. <br /><br /><br /><br /><br />
                        </p>
                    </div>
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>

                </div>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 " data-aos="fade-up">
                        <h3 className={this.state.class1_tit}>Quality Policy</h3>
                        <p className={this.state.class1}><br /><br />
                            We Patankar's Creative Turnkey Projects Pvt.Ltd. Are in the field of construction of civil & MEP work for construction of residential, industrial and commercial spaces.<br /><br />
                            We are committed to deliver the best product to the satisfaction of our valued customers. The concern of quality is nurtured at every level our work force is qualified and adapted to improvising in quality needs.<br /><br />
                            As standing on strong foundation of qualification and having long experience, we understand that every day is a new day for learning within the construction industry. We will abide by all applicable statutory and regulatory requirements.<br /><br />
                            With this in mind as an experience we provide training to all staff members, starting with the directors to the work force, who too are actively involved, along with all employees, in contribution to quality and continual improvement of quality management systems.
                    </p>
                    </div>
                    <div className="col-lg-4">
                        <br /><br />
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/quality.jpg" className="img-fluid" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                </div>
            
                <br /><br /><br /><br /><br /><br />
                <div className="row">
                <div className="col-lg-1 col-sm-12 ">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-lg-4">
                        <img data-aos="fade-up" data-aos-delay="300" src="assets/img/m_v/safety.jpg" className="img-fluid" height="300px" width="498px" alt="mission"></img>
                    </div>
                    <div className="col-lg-6 col-sm-12 " data-aos="fade-up"><br />
                        <h3 className={this.state.class2_tit}>Environment, Health and <strong>Safety</strong></h3>
                        <p className={this.state.class2}><br /><br />
                            We creative turnkey projects pvt. Ltd. Intends to meet these commitments by ensuring that safe working practice and procedures are adopted, which comply with the requirement of the health and safety legislation and standard practices in india.
                            Our team is bound to take care of their own and others health and maintain a safe environment at work.
                            All employees of creative turnkey projects pvt. Ltd .  Are required to:
                            Encourage safe behaving among their colleagues.
                            Participate actively in safety program and put the required knowledge in to practice.
                            Follow defined procedures with self-discipline and work safety at all times.
                            Take appropriate actions to protect air, water and animal & planet life.
                        </p>
                    </div>
                    <div className="col-lg-1 col-sm-12 ">
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
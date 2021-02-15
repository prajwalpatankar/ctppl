import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counts extends Component {
    render() {
        return (
            <section id="counts" className="counts section-bg">
                        <div className="container">

                            <div className="row justify-content-end">

                                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <span classNameName="counter-up"><CountUp
                                            end={46}
                                            duration={4}
                                        />
                                        </span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                    <span classNameName="counter-up"><CountUp
                                            end={30}
                                            duration={4}
                                        />
                                        </span>
                                        <p>Years of experience</p>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                    <span classNameName="counter-up"><CountUp
                                            end={11} 
                                            duration={4}
                                        />
                                        </span>
                                        <p> Million Safe man-hours</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <span classNameName="counter-up"><CountUp
                                            end={46}
                                            duration={4}
                                        />
                                        </span>
                                        <p>% Rate of Repeat Orders</p>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                    <span classNameName="counter-up"><CountUp
                                            end={50}
                                            duration={4}
                                        />
                                        </span>
                                        <p>Projects</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
        );
    }
}

export default Counts;
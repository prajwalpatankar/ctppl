import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="projects"> 
                <br /><br /><br />
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2 className="page-title">Projects</h2>
                        <h6 className="title-description">List of completed Projects </h6>
                    </div>
                    <div className="Project-Titles">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="/"><h3>Completed</h3></a>
                            </div>
                            <div className="col-md-6">
                                <a href="/"><h3>OnGoing</h3></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
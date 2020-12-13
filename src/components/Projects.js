import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="projects"> 
                <br /><br />
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>List of completed Projects </p>
                    </div>
                    <div className="Project-Titles">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="/"><h2>Completed</h2></a>
                            </div>
                            <div className="col-md-6">
                                <a href="/"><h2>OnGoing</h2></a>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
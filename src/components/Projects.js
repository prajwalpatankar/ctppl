import React, { Component } from 'react';
import OnGoing from './OnGoing';
import Completed from "./Completed";
import Footer from './sections/Footer';

class Projects extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.completed.substring(1))
        
        this.state = { 
            completed: parseInt(this.props.match.params.completed.substring(1))               
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.completed !== this.props.match.params.completed) {
          this.setState({completed: parseInt(this.props.match.params.completed.substring(1))});
        }
      }

      componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    showComplete = () =>{
        this.setState({completed: 1});
    }

    showOngoing = () => {
        this.setState({completed: 0});
    }

    BackToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    render() {
        let projects;
        if(this.state.completed) {
            projects=<Completed />
        } else {
            projects=<OnGoing />
        }
        return (
            <div id="projects" className="projects section-bg"> 
                <br /><br /><br />
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <br /><br />
                        <h2 className="page-title">Projects</h2>
                        <h6 className="title-description">Details of our Projects </h6>
                    </div>
                    <div className="Project-Titles">
                        <div className="row">
                            <div className="col-md-6">
                                <button style={{outline: 'none'}} className={this.state.completed ? 'project-btns-active' : 'project-btns'} onClick={this.showComplete}><h3>Completed</h3></button>
                            </div>
                            <div className="col-md-6">
                                <button style={{outline: 'none'}} className={this.state.completed ? 'project-btns' : 'project-btns-active'} onClick={this.showOngoing}><h3>OnGoing</h3></button>
                            </div>
                        </div> 
                    </div>
                </div>
                {projects}
                <button className="back-to-top" onClick={this.BackToTop}><i className="ri-arrow-up-line"></i></button>
                <Footer />
            </div>
        );
    }
}

export default Projects;
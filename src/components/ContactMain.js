import React, { Component } from 'react';
import Footer from './sections/Footer';
import Job from './Job';
import Contact from './Contact';

class ContactMain extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.match.params.completed.substring(1))

        this.state = {
            completed: parseInt(this.props.match.params.completed.substring(1))
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.completed !== this.props.match.params.completed) {
            this.setState({ completed: parseInt(this.props.match.params.completed.substring(1)) });
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    showComplete = () => {
        this.setState({ completed: 1 });
    }

    showOngoing = () => {
        this.setState({ completed: 0 });
    }

    render() {
        let contact;
        if (this.state.completed) {
            contact = <Contact />
        } else {
            contact = <Job />
        }
        return (
            <div id="projects" className="projects">
                <br /><br /><br />
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <br /><br />
                        <h2 className="page-title">Get in touch</h2>
                        {/* <h6 className="title-description">-</h6> */}
                    </div>
                    <div className="Project-Titles">
                        <div className="row">
                            <div className="col-md-6">
                                <button style={{ outline: 'none' }} className={this.state.completed ? 'project-btns-active' : 'project-btns'} onClick={this.showComplete}><h3>Contact us</h3></button>
                            </div>
                            <div className="col-md-6">
                                <button style={{ outline: 'none' }} className={this.state.completed ? 'project-btns' : 'project-btns-active'} onClick={this.showOngoing}><h3>Career with us</h3></button>
                            </div>
                        </div>
                    </div>
                </div>
                {contact}
                <Footer />
            </div>
        );
    }
}

export default ContactMain;
import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div>
                <section id="about-video" className="about-video">
                    <div className="container" data-aos="fade-up">

                        <div className="row">

                            <div className="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                                <img src="assets/img/image_video.jpg" className="img-fluid" alt="" />
                                <a href="/" className="venobox play-btn mb-4"> </a>
                            </div>

                            <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
            </p>
                                <ul>
                                    <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
                                    <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
            </p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Video;



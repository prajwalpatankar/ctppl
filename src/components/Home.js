import React, { Component } from 'react';
import About from './sections/About';
import Services from './sections/Services';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from './sections/Footer';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { triggCounter: false };
    }

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
    // isBottom(el) {
    //     return el.getBoundingClientRect().bottom <= window.innerHeight;
    //   }

    //   componentDidMount() {
    //     document.addEventListener('scroll', this.trackScrolling);
    //   }

    //   componentWillUnmount() {
    //     document.removeEventListener('scroll', this.trackScrolling);
    //   }

    //   trackScrolling = () => {
    //     const wrappedElement = document.getElementById('counts');
    //     if (this.isBottom(wrappedElement)) {
    //       console.log('counts bottom reached');
    //       this.setState({triggCounter:true});
    //       document.removeEventListener('scroll', this.trackScrolling);
    //     }
    //   };


    render() {
        return (
            <div>
                {/* <!-- ======= Hero Section ======= --> */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container position-relative">
                        {/* <img data-aos="fade-up" src="assets/img/ctppl.png" height="100px" alt="ctppl" />
                        <img src="assets/img/final_logo_PNG.png" height="50px" alt="pctppl"/> */}
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-9 text-center">
                                <span><h1 className="patankars" data-aos="fade-up" data-aos-delay="10"> PATANKAR's</h1><h1 className="main-title-ctppl" data-aos="fade-up" data-aos-delay="10"> CREATIVE Turnkey Projects Pvt. Ltd.</h1></span>
                                <h2 data-aos="zoom-in-up" data-aos-delay="100">We <strong >Dream!</strong> We <strong>Plan!</strong> We <strong>Achieve!</strong></h2>
                            </div>
                        </div>
                        {/* <div class="text-center">
                             <Link to="#about" class="btn-get-started scrollto">Get Started</Link>
                        </div> */}

                        <div className="row icon-boxes">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="ri-funds-box-line"></i></div>
                                    <h4 className="title"> <Link to="OurServices">Our Services</Link></h4>
                                    <p className="description">Delivering diverse Turnkey Construction Projects within the stipulated time.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className=" ri-home-heart-line"></i></div>
                                    <h4 className="title"> <Link to="OurClientele">Our Clientele</Link></h4>
                                    <p className="description">Providing Services to leading brands with a plenitude of repeat orders</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="icon"><i className="ri-building-line"></i></div>
                                    <h4 className="title"> <Link to="Projects:1">Completed Projects</Link></h4>
                                    <p className="description">Behold our timely delivered Projects attained for client satisfaction</p>
                                </div>
                            </div>
                            {/* THe industry knows us for our asjbf;ajbifjaifu  ----------- expanding our reach with*/}
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                                <div className="icon-box">
                                    <div className="icon"><i className=" ri-building-3-line"></i></div>
                                    <h4 className="title"> <Link to="Projects:0">On Going Projects</Link></h4>
                                    <p className="description">Visit us at our on-going Project sites to gaze at our modern construction techniques</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- End Hero --> */}

                <main id="main">

                    {/* <!-- ======= About Section ======= --> */}
                    <About />
                    <button data-aos="zoom-in-up" data-aos-delay="500" className="btn-learn-more"><Link to="/AboutUs">Learn More</Link></button> <br /><br /><br />

                    {/* <!-- End About Section --> */}

                    {/* <!-- ======= About Video Section ======= --> */}

                    {/* <Video /> */}

                    {/* <!-- End About Video Section --> */}

                    {/* <!-- ======= Cta Section ======= --> */}
                    <section id="cta" className="cta">
                        <div className="container" data-aos="zoom-in">
                            <div className="text-center">
                                <h3>Symbol of Passion</h3>
                                <p>Catalyst of Growth</p>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Cta Section --> */}

                    {/* <!-- ======= Services Section ======= --> */}
                    <Services />
                    {/* <!-- End Sevices Section --> */}



                    {/* <!-- ======= Glimpse Section ======= --> */}
                    {/* <section id="portfolio" className="portfolio">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Glimpse of Completed Projects</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row" data-aos="fade-up" data-aos-delay="150">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">Industrial</li>
                                        <li data-filter=".filter-card">Residential</li>
                                        <li data-filter=".filter-web">Institutional</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="300">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Industrial 1</h4>
                                            <p>Industrial</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Residential 1</h4>
                                            <p>Residential</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Industrial 2</h4>
                                            <p>Industrial</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Institutional 2</h4>
                                            <p>Institutional</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Residential 2</h4>
                                            <p>Residential</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Industrial 3</h4>
                                            <p>Industrial</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Institutional 1</h4>
                                            <p>Institutional</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Institutional 3</h4>
                                            <p>Institutional</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Residential 3</h4>
                                            <p>Residential</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section> */}
                    {/* <!-- End Glimpse Section --> */}



                    {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
                    {/* <section id="faq" className="faq section-bg">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Frequently Asked Questions</h2>
                                <p>Need Content here</p>
                            </div>

                            <div className="faq-list">
                                <ul>
                                    <li data-aos="fade-up">
                                        <a data-toggle="collapse" className="collapse" href="#faq-list-1">Question 1? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="100">
                                        <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Question 2? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="200">
                                        <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Question 3? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="300">
                                        <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Question 4 <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="400">
                                        <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Question 5? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </section> */}
                    {/* <!-- End Frequently Asked Questions Section --> */}

                    {/* <!-- ======= Contact Section ======= --> */}
                    {/* <section id="contact" className="contact">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div>
                                <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                            </div>

                            <div className="row mt-5">

                                <div className="col-lg-4">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>

                                        <div className="email">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>

                                        <div className="phone">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-8 mt-5 mt-lg-0">

                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                <div className="validate"></div>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </section> */}
                    {/* <!-- End Contact Section --> */}

                </main>
                {/* <!-- End #main --> */}

                {/* <!-- ======= Footer ======= --> */}
                <Footer />

                <button className="back-to-top" onClick={this.BackToTop}><i className="ri-arrow-up-line"></i></button>
                {/* <div id="preloader"></div> */}

            </div>
        );
    }
}

export default Home;
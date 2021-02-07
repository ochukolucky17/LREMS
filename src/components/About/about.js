import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import video_animate from "../../assets/images/videoplayback.mp4";
import SectionTitle from "../common/section-title";

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="about">
                    <Container>
                        <SectionTitle
                            title1="Why Choose "
                            title2="LREMS"
                            desc="Lucky Real Estate Management System was developed with the best of technologies and best practice real estate management processes"
                        />
                        <Row>
                        <Col md={3}> </Col>
                        <Col md={7}>   
                        <video autoPlay loop muted id = 'video'>
                            <source src={video_animate} type='video/mp4' />
                        </video> </Col>
                        <Col md={4}> <p></p> <p></p></Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <h2 className="font-weight-light line-height-1_6 text-dark mb-4">REMS that meets your business needs</h2>
                            </Col>
                            <Col md={{size:7, offset :1}}>
                                <Row>
                                    <Col md={6}>
                                        <h6 className="text-dark font-weight-light f-20 mb-3">100% ROI Real Estate Investment</h6>
                                        <p className="text-muted font-weight-light">Take your real estate business to the next level, connect to the right customers, make sales and rentals, manage facilities and get 100% returns on your real estate investment with LREMS</p>
                                    </Col>
                                    <Col md={6}>
                                        <h6 className="text-dark font-weight-light f-20 mb-3">Eliminate Bottlenecks</h6>
                                        <p className="text-muted font-weight-light">Reduce your real-estate marketing, operations and management costs by relying on an holistic solution that meets the need of your business and effectively streamline your processes</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;
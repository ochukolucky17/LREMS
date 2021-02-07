import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/user/img-1.jpg";
import client2 from "../../assets/images/user/img-2.jpg";
import client3 from "../../assets/images/user/img-3.jpg";
import client4 from "../../assets/images/user/img-4.jpg";
import client5 from "../../assets/images/user/img-5.jpg";

class Clients extends Component {
    state = {
        clients : [
            { image : client1, name : "Nigeria Property Center", post : "Web Developer", desc : "Easy to set up, holistically covers the Real Estate business, Get up and running in no time" },
            { image : client2, name : "Tolet.com", post : "Web Developer", desc : "Superb property search, List unlimited number of properties and get potential customers without hassle" },
            { image : client3, name : "PrivateProperty.com", post : "Web Developer", desc : "Easy to set up, holistically covers the Real Estate business, Get up and running in no time" },
            { image : client4, name : "RevolutionPlus Properties", post : "Web Developer", desc : "Superb property search, List unlimited number of properties and get potential customers without hassle" },
            { image : client5, name : "Jumia Properties", post : "Web Developer", desc : "Easy to set up, holistically covers the Real Estate business, Get up and running in no time" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="clients">
                    <Container>
                    <SectionTitle
                            title1="We use "
                            title2="LREMS"
                            desc="Dont just take our word for it, listen to our client base who are powering real estate initiatives using LREMS"
                        />
                        <Row>
                            <Col lg={4}>
                                <h3 className="font-weight-normal mt-3 line-height-1_4">Some Words From Our <span className="font-weight-medium text-warning">Happy Clients </span></h3>
                                <div className="testi-border my-4"></div>
                                <p className="text-muted">Dont just take our word for it, listen to our client base who are powering real estate initiatives using LREMS</p>
                            </Col>
                            <Col lg={8}>
                                <ClientsSlider clients={this.state.clients} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;
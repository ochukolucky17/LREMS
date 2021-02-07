import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import counterbg from "../../assets/images/counter-bg-1.jpg";

class Counter extends Component {
    state = {
        counters : [
            { icon : "pe-7s-like2", title : "SATISFIED CLIENTS", postfix : "+", end : 9 },
            { icon : "pe-7s-light", title : "THIRD-PARTY AGENTS", postfix : "+", end : 93000 },
            { icon : "pe-7s-smile", title : "MORTGAGE BANKS", postfix : "+", end : 24 },
            { icon : "pe-7s-star", title : "INTEGRATED PAYMENTS", postfix : "", end : 58 },
        ],
    }
    render() {
        return (
            <React.Fragment>
            <section className="section counter-bg" style={{background : `url(${counterbg}) center center`}}>
                <div className="bg-overlay op-75"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mb-5">
                                <h2 className="font-weight-normal text-white mb-2">Our Real Estate Analytics Cover</h2>
                                <h5 className="font-weight-normal text-white-70">Over 200+ locations and 12+ States</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row id="counter">
                        <CounterBox counters={this.state.counters} />
                    </Row>
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Counter;
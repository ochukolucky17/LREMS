import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                {id : 1, img : feature1, icon : "mdi  mdi-laptop-mac", title : "Property Dashboard", desc : "LREMS offers a robust analytics of real estate property sales across target locations such as PPI, Last previous prices per Area, Fair, high, good and best prices, mortgage management", link : "/"},
                {id : 2, img : feature2, icon : "mdi  mdi-account-group", title : "Payment Integration", desc : "Lucky Real Estate Management System is fully integrated with PAYPAL or other payment gateways. For high end payments, bank and wire transfer options have been integrated", link : "/"},
                {id : 3, img : feature3, icon : "mdi  mdi-chart-bell-curve", title : "Mortgage Portal", desc : "LREMS is linked with over 25 Banks offering mortage services. Users can select from a range of mortgage offers, submit required documents and get approved for mortage facility ", link : "/"},
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
            <section className="section" id="features">
                <Container>
                                <SectionTitle
                                    title1="LREMS "
                                    title2="Features"
                                    desc="Lucky Real Estate Management System offers a wide range of features which can be categorised into three (3) key value propositions"
                                />

                            <FeatureBox features={this.state.features} />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Features;
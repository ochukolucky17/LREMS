import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "pe-7s-headphones service-icon", title : "Asset Register", desc : "A robust Asset database of Lands, Buildings, Estates, Leaseholds, Short-term lease." },
                { icon : "pe-7s-tools service-icon", title : "Property Rentals", desc : "Connect Users to a large database of realestate options, compare options, intiate rental." },
                { icon : "pe-7s-display1 service-icon", title : "Property Sales", desc : "Properties Listing, Document Verification : CoF, Govenors Consent, Initial Property Sales." },
                { icon : "pe-7s-cup service-icon", title : "Property Search", desc : "Property Filter, Map Search, GPS Search, Sort By Property Type, Price, Set Price Range, Facility Search" },
                { icon : "pe-7s-light service-icon", title : "Third Party Agents", desc : "Agents Portal, Agents property listing, execute agent propery sales and rentals, commission mgmt." },
                { icon : "pe-7s-graph1 service-icon", title : "Property Price Index", desc : "Calculate property price index leveraging historic data per area,  compare previous prices" },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <SectionTitle
                            title1="LREMS "
                            title2="Services"
                            desc="Lucky Real Estate Management System is a state of the art real estate software that offers the real estate providers key capabilities to manage and dispense Assets"
                        />

                        <Row>
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;
import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/Banner';
import Content from '../components/ContactUs/Content';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Content />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;

import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/SoftwareLanding/Banner';
import CtaCard from '../components/SoftwareLanding/CtaCard';
import Features from '../components/SoftwareLanding/Features';
import Overview from '../components/SoftwareLanding/Overview';
import SaasTools from '../components/SoftwareLanding/SaasTools';
import Blog from '../components/SoftwareLanding/Blog';


class HomeFive extends React.Component {
    render() {
        return (
            <React.Fragment>
               <Navbar />
               <Banner />
               <Features />
               <Overview />
               <CtaCard/>
               {/* <Blog /> */}
               <SaasTools />
               <Footer />
            </React.Fragment>
        );
    }
}

export default HomeFive;

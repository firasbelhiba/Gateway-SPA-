import React, { Fragment } from 'react'
import About_us from '../components/About_us';
import Overview from '../components/Overview';
import Map from '../components/Map';
import Services from '../components/Services';
import Footer from '../../layouts/Footer';
import Carousel from '../components/Carousel';




export const Landing = () => {
    return (
        <Fragment>
            <Carousel />
            <About_us />
            <Overview />
            <Services />
            <Map />

        </Fragment>
    )
}

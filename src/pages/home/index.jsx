import React from "react";

import './style.css';

import Header from '../../components/header/index';
import Banner from '../../components/banner/index';
import Footer from '../../components/footer/index';

export default function Home() {
    return (
        <>
            <Header />

            <Banner />
            
            <Footer />
        </>
    );
}
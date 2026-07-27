import React from "react";

import './style.css';

import Header from '../../components/header/index';
import Banner from '../../components/banner/index';
import Categories from "../../components/categories";
import Footer from '../../components/footer/index';

export default function Home() {
    return (
        <>
            <Header />

            <Banner />

            <Categories />
            
            <Footer />
        </>
    );
}
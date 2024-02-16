import React from 'react';
import HeroHome from "./heroHome/heroHome";
import Apply from "../apply/apply";
import Block from "../block/block";
import What from "../what/what";
import Footer from "../footer/footer";

const Home = () => {
    return (
        <>
           <HeroHome/>
            <Apply/>
            <Block/>
            <What/>
            {/*<Footer/>*/}
        </>
    );
};

export default Home;
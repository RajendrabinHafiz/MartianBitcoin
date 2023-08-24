import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import SaleTimer from '../components/landing/SaleTimer';
import About from '../components/landing/About';
import Protocol from '../components/landing/Protocol';
import Join from '../components/landing/Join';
import Tokenomics from '../components/landing/Tokenomics';
import Game from '../components/landing/Game';
import NFT from '../components/landing/NFT';
import Wallet from '../components/landing/Wallet';
import Values from '../components/landing/Values';
import Team from '../components/landing/Team';
import Footer from '../components/landing/Footer';
import Timeline from '../components/landing/Timeline';

import CircleBar from '../components/landing/timeline/CircleBar'
import Stage from '../components/landing/timeline/Stage'
import TimelineBar from '../components/landing/timeline/TimelineBar'

function LandingPage() {
    return (
        <React.Fragment>
            <Header/>
            <Hero/>
            <SaleTimer/>
            <About/>
            <Protocol/>
            <Join header="ARE YOU READY?"/>
            <Tokenomics/>
            <Timeline />
            <Game/>
            <Values/>
            <NFT/>
            <Wallet/>
            <Team/>
            <Join header="JOIN NOW"/>
            <Footer/>
        </React.Fragment>
    )
}

export default LandingPage

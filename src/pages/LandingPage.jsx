import { Navbar } from '../components';
import { SalesTimer, Explore, About, Hero, Timeline, Footer, Team, Values, Protocol, World, Tokenomics, Join, NFT, Wallet } from '../sections';

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <div className="bg-primary-black overflow-hidden">
    <div className="relative">
      <SalesTimer />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-04 z-0" />
      <Protocol />
    </div>
    <Join header="ARE YOU READY?"/>
    <Tokenomics/>
    <World />
    <div className="relative">
      <Timeline />
      <div className="gradient-04 z-0" />
      <Explore />
      <Values />
      <NFT/>
      <Wallet />
      <Team/>
      <Join header="JOIN NOW"/>
    </div>
    <Footer />
    </div>
  </div>
);

export default LandingPage;

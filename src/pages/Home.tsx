import AIandGraphs from "../components/home/AIandGraphs";
import FAQ from "../components/home/FAQ";
import Feature from "../components/home/Feature";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import Howitworks from "../components/home/Howitworks";
import Pricing from "../components/home/Pricing";
import RequestDemo from "../components/home/RequestDemo";
function Home() {
  return (
    <>
      <HeroSection />
      <AIandGraphs />
      <Feature />
      <Features />
      <Howitworks />
      <Pricing />
      <FAQ />
      <RequestDemo />
    </>
  );
}

export default Home;

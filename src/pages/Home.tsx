import AI from "../components/home/AI";
import Feature from "../components/home/Feature";
import Features from "../components/home/Features";
import Graphs from "../components/home/Graphs";
import HeroSection from "../components/home/HeroSection";
import Howitworks from "../components/home/Howitworks";
import Pricing from "../components/home/Pricing";
function Home() {
  return (
    <>
      <HeroSection />
      <AI />
      <Graphs />
      <Feature />
      <Features />
      <Howitworks />
      <Pricing />
    </>
  );
}

export default Home;

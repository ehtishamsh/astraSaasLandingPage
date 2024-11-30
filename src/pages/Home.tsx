import AI from "../components/home/AI";
import Feature from "../components/home/Feature";
import Features from "../components/home/Features";
import Graphs from "../components/home/Graphs";
import HeroSection from "../components/home/HeroSection";
function Home() {
  return (
    <>
      <HeroSection />
      <AI />
      <Graphs />
      <Feature />
      <Features />
    </>
  );
}

export default Home;

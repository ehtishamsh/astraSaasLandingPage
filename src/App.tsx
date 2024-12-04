import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-mainColor-950">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

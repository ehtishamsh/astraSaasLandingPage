import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-mainColor-950">
        <Outlet />
      </div>
    </>
  );
}

export default App;

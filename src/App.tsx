import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-mainColor-900">
        <Outlet />
      </div>
    </>
  );
}

export default App;

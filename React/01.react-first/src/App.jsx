import { Outlet } from "react-router-dom";
import "./assets/css/main.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#f2f2f2]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

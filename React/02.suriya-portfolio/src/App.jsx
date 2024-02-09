import { Outlet } from "react-router-dom";
import "./assets/css/main.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

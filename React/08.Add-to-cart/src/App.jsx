import "./assets/css/App.css";

import CardPage from "./pages/CardPage.jsx";
import Context from "./Context.jsx";
// import Hoooks from "./components/Hoooks.jsx";

function App() {
  return (
    <Context>
      <CardPage />
    </Context>
  );
}

export default App;

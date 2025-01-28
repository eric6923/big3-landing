import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FullPortfolio from "./pages/FullPortfolio";
import CustomScrollComponent from "./components/CustomScrollComponent";
import { Sugar } from "react-preloaders";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* Home Route - This serves as the main page */}
          <Route path="/" element={<Home />} />
          {/* Full Portfolio Route */}
          {/* <Route
            className="max-w-7xl mx-auto pt-20 px-6"
            path="/full-portfolio"
            element={<FullPortfolio />}
          /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
      <Sugar />
    </Router>
  );
};

export default App;

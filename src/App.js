import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LeftPart from "./Components/LeftPart";
import Navigation from "./Components/Navigation";
import RightPart from "./Components/RightPart";
import Orders from "./Components/Orders";
import Holdings from "./Components/Holdings";
import Positions from "./Components/Positions";
import Ipo from "./Components/Ipo";
import Funds from "./Components/Funds";
import Feedback from "./Components/Feedback";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="flex">
          <div class="leftpart">
            <LeftPart />
          </div>
          <div className="rightpart">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<RightPart />} />
              <Route path="/order" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/position" element={<Positions />} />
              <Route path="/ipolist" element={<Ipo />} />
              <Route path="/funds" element={<Funds />} />
            </Routes>
          </div>
        </div>
        <Feedback />
      </Router>
    </div>
  );
}

export default App;

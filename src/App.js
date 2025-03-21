import './App.css';
import LeftPart from './Components/LeftPart';
import Navigation from './Components/Navigation';
import RightPart from './Components/RightPart';

function App() {
  return (
    <div>
      <Navigation />
      <div className="flex">
        <div class="leftpart">
          <LeftPart />
        </div>
        <div className="rightpart">
          <RightPart />
        </div>
      </div>
    </div>
  );
}

export default App;

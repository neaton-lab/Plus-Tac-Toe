import Home from './pages/Home.js';
import Settings from './pages/Settings.js';
import Help from './pages/Help.js';
import Game from './pages/Game.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-white text-black dark:bg-[#121212]  dark:text-gray-100/90'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/help" component={Help} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

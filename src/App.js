import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Topbar from './components/topbar/Topbar';
import VideoP from './pages/videoC/VideoP';
import Single from './pages/single/Single';
import Definicion from './components/definicion/Definicion';
import Bitacora from './components/bitacora/Bitacora';

function App() {
  return (
    <Router>
    <Topbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
        <Definicion img="https://be-confluence.com/wp-content/uploads/2020/04/empresarial-762x480.jpg" />
        <Bitacora />
      </Route>
      <Route path="/posts">
        <Homepage />
      </Route>

      <Route path="/video">
        <VideoP />
      </Route>

      <Route path="/cuento">
        <Single />
      </Route>

    </Switch>
  </Router>
  );
}

export default App;

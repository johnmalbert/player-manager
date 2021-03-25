import mariners from './mariners.jpg';
import './App.css';
import { Link } from '@reach/router';
import { Router } from '@reach/router';
import Main from './views/Main';
import FormPage from './components/FormPage';

function App() {
  return (
    <>
    <div className="container p-5">
      <div className="row">
        <img style={{maxHeight: "50px"}} src={mariners} alt="Mariners Logo"/>
        <h1><Link to= "/players"> Manage Players </Link>|<Link to="/players/manage"> Set Lineup </Link></h1>
      </div>
    </div>
    <Router>
      <Main path="/" />
      <Main path="/players" />
      <FormPage path="/players/add" />
    </Router>
    </>
  );
}

export default App;

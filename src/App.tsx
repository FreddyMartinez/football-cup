import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "./components/frame/AppHeader";
import "./App.css";
import AppHome from "./components/home/AppHome";
import CreateTeam from "./components/create-team/CreateTeam";
import TeamList from "./components/team-list/TeamList";
import TeamState from "./context/teams/TeamState";
import CountryState from "./context/countries/CountryState";
import PlayerState from "./context/players/PlayerState";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/frame/AppAlert";

function App() {
  return (
    <CountryState>
      <TeamState>
        <PlayerState>
          <AlertState>
            <Router>
              <AppHeader />
              <Alert />
              <Routes>
                <Route path='/' element={<AppHome />} />
                <Route path='/create' element={<CreateTeam />} />
                <Route path='/teams' element={<TeamList />} />
              </Routes>
            </Router>
          </AlertState>
        </PlayerState>
      </TeamState>
    </CountryState>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from './components/frame/AppHeader';
import './App.css';
import AppHome from './components/home/AppHome';
import CreateTeam from './components/create-team/CreateTeam';
import TeamList from "./components/team-list/TeamList";

function App() {
  return (
    <Router>
      <AppHeader></AppHeader>
      <Routes>
        <Route path='/' element={<AppHome/>} />
        <Route path='/create' element={<CreateTeam/>} />
        <Route path='/teams' element={<TeamList/>} />
      </Routes>
    </Router>
  );
}

export default App;

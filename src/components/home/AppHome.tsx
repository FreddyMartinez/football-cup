import { Link } from "react-router-dom";
import './AppHome.css'

const AppHome = () => {
  return (
    <div>
      <h1>Welcome to Your Adidas Team</h1>
      <section>
        <h4>What do you want to do?</h4>
        <div className='buttons-contaiter'>
          <Link to='/create'>
            <button className="btn home-btn">CREATE TEAM</button>
          </Link>
          <Link to='/teams'>
            <button className="btn home-btn">CHECK MY TEAMS</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AppHome

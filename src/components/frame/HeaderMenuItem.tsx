import { Link } from "react-router-dom";
import "./HeaderMenuItem.css";

const HeaderMenuItem = ({ text, route }: { text: string; route: string }) => {
  return (
    <li>
      <Link to={route}>{text}</Link>
    </li>
  );
};

export default HeaderMenuItem;

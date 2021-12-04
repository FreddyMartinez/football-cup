import "./HeaderMenuItem.css";

const HeaderMenuItem = ({ text, route }: { text: string; route: string }) => {
  return (
    <li>
      <a href={route}>{text}</a>
    </li>
  );
};

export default HeaderMenuItem;

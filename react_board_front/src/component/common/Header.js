import { Link } from "react-router-dom";
import "./common.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="site-name">REACT-BOARD</div>
        <ul className="nav">
          <li>
            <Link to="/list">게시판</Link>
          </li>
          <li>
            <Link to="#">메뉴2</Link>
          </li>
          <li>
            <Link to="#">메뉴3</Link>
          </li>
          <li>
            <Link to="#">메뉴4</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;

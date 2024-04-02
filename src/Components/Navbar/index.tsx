import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="nav_element">
          <div className="nav_left">
            <ul>
              <li className="li_nav">
                <Link className="remove_li_deafult" to="/">
                  Home
                </Link>
              </li>
              <li className="li_nav">
                <Link className="remove_li_deafult" to="tutorial">
                  How to Use
                </Link>
              </li>
              <li className="li_nav">
                <Link className="remove_li_deafult" to="About">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo">
            <h1>Snaptiktok</h1>
          </div>
          <div className="nav_right">
            <a
              className="mp3_link"
              href="https://qy2mp3.online/"
              target="blank"
            >
              <li className="li_nav">Donwload Youtube Mp3</li>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

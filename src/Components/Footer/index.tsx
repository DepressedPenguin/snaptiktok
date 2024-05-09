import "./stlye.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="top_level_footer">
          <div className="split_footer">
            <h1 className="headline_footer">About Us</h1>
            <p>
              TtikToSaver is one of the Best online tool to Download Tik Tok
              Videos without Watermark also you can download Tik Tok MP3 music
              for free.
            </p>
          </div>
          <div className="split_footer">
            <h1 className="headline_footer">Quick Links</h1>
            <ul>
              {/* <li>Download TikTok Story</li> */}
              <li>
                <Link className="remove_def_li" to="terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="remove_def_li" to="privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="remove_def_li" to="contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="split_footer">
            <h1 className="headline_footer">More Tools</h1>
            <ul>
              <a
                className="mp3_footer_link"
                href="https://qy2mp3.online/"
                target="blank"
              >
                <li>Youtube Donwloader MP3</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="bottom_level_footer">
          <p>2000-2024 © snaptiktok, All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

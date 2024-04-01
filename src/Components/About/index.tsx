import React, { useState } from "react";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About() {
  const [discordname, setdiscordname] = useState("");

  const displayName = () => {
    setdiscordname("depressed_penguin");
  };

  return (
    <section>
      <div className="about_us">
        <h1>ABOUT</h1>
        <h1></h1>
      </div>
      <div className="about_us_p">
        <p>
          snaptiktokis an online TikTok Downloader tool, you can easily Download
          TikTok videos with or without watermark and TikTok Videos or Music in
          MP3 format.
        </p>
        <br />
        <p>
          The videos are on TikTok servers and not ours, we do not host or save
          videos on our servers & also we don't keep the history of downloaded
          videos. Using snaptiktokis 100% anonymous and safe.
        </p>
        <br />
        <p>
          If you have any trouble using snaptiktokor inquiries (suggestions, bug
          reports), please contact us.
        </p>
        <br />
        <p>
          If you love using our TikTok Video Downloader tool, Don't forget to
          Share it with your friends!
        </p>
      </div>
      {discordname}
      <div className="social_media">
        <ul className="social_media_icons">
          <a href="###">
            <i onClick={displayName} className="bi bi-discord icon_about"></i>
          </a>
          <a href="https://github.com/DepressedPenguin" target="blank">
            <i className="bi bi-github icon_about"></i>
          </a>
          <a href="https://twitter.com/DP_0_PENGUIN" target="blank">
            <i className="bi bi-twitter-x icon_about"></i>
          </a>
        </ul>
      </div>
    </section>
  );
}

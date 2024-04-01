import React, { useEffect, useState } from "react";
import "./style.css";
import Convert from "../Convert";
import gif_loading from "/loading.gif";

type UrlProps = {
  videoData: any;
  animation: boolean;
  fetchData: () => void;
  setUrlValue: (value: string) => void;
};

export default function Url({
  videoData,
  animation,
  fetchData,
  setUrlValue,
}: UrlProps) {
  const [displayUrl, setDisplayUrl] = useState(true);
  const [displayConvert, setDisplayConvert] = useState(false);

  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value);
  };

  useEffect(() => {
    if (!animation && videoData) {
      showHandler();
    }
  }, [animation]);

  const showHandler = () => {
    setDisplayUrl(false);
    setDisplayConvert(true);
  };

  const showBackHandler = () => {
    setDisplayUrl(true);
    setDisplayConvert(false);
  };

  return (
    <>
      <section>
        {animation ? (
          <img src={gif_loading} alt="loading" />
        ) : displayUrl ? (
          <div className="url_input">
            <h1 id="headline_url">TikTok Downloader</h1>
            <p>Download TikTok Videos Online. No Watermark</p>
            <div className="input_zone">
              <input
                type="text"
                placeholder="Enter TikTok Video OR Song Link ..."
                onChange={onChangeUrl}
                className="input_filed"
              />
              <button onClick={fetchData}>Download</button>
            </div>
          </div>
        ) : (
          <Convert showBackHandler={showBackHandler} videoData={videoData} />
        )}
      </section>
    </>
  );
}

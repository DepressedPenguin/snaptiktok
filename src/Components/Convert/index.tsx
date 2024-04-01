import "./style.css";

type Props = {
  showBackHandler: () => void;
  videoData: {
    thumbImg: string;
    dynamic_cover: string;
    author: string;
    description: string;
    video: string;
    music: string;
  };
};

export default function Convert({ showBackHandler, videoData }: Props) {
  return (
    <>
      <section>
        <div className="deatils_tiktok_video">
          <div className="logo_zone">
            <div className="logo_account">
              <img src={videoData.thumbImg} alt="Thumbnail" />
            </div>
          </div>
          <div className="perview_img">
            <img src={videoData.dynamic_cover} alt="Dynamic Cover" />
          </div>
          <div className="account_user_and_keywords">
            <div className="username_account">Author : {videoData.author}</div>
            <div className="username_account">
              KeyWords : {videoData.description}
            </div>
          </div>
          <div className="download_btns">
            <div className="download_deatils">
              <a className="download_button" href={videoData.video}>
                Download Video HD
              </a>
            </div>
            <div className="download_deatils">
              <a className="download_button" href={videoData.music}>
                Download Music MP3
              </a>
            </div>
            <div className="download_deatils">
              <button className="back_formore" onClick={showBackHandler}>
                BACK
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

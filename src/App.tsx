import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Instructions from "./Components/Instructions";
import Navbar from "./Components/Navbar";
import Note from "./Components/Note";
import Url from "./Components/Url_Input";
import HowToUse from "./Components/HowtoUse";
import About from "./Components/About";
import Tou from "./Components/Tou";
import Privacy from "./Components/Privacy";
import Contact from "./Components/Contact";
import Adstxt from "./Components/AdsTxt";

type VideoData = {
  thumbImg: string;
  author: string;
  description: string;
  dynamic_cover: string;
  video: string;
  music: string;
};

function App() {
  const [animation, setAnimation] = useState<boolean>(false);
  const [urlValue, setUrlValue] = useState("");
  const [videoData, setVideoData] = useState<VideoData | undefined>(undefined);

  const fetchData = async () => {
    const url = `https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index?url=${urlValue}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_HOST_API,
      },
    };

    try {
      setAnimation(true);
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        console.log("FROM APP");
        setAnimation(false);
      }
      setVideoData({
        thumbImg: result.avatar_thumb[0],
        author: result.author[0],
        description: result.description[0],
        dynamic_cover: result.dynamic_cover[0],
        video: result.video[0],
        music: result.music[0],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <MainContent
        videoData={videoData}
        animation={animation}
        fetchData={fetchData}
        setUrlValue={setUrlValue}
      />
    </Router>
  );
}

type HomeProps = {
  videoData: VideoData | undefined;
  animation: boolean;
  fetchData: () => void;
  setUrlValue: (value: string) => void;
};

function Home({ videoData, animation, fetchData, setUrlValue }: HomeProps) {
  return (
    <>
      <div className="main_snaptiktok_container">
        <Url
          videoData={videoData}
          animation={animation}
          fetchData={fetchData}
          setUrlValue={setUrlValue}
        />
        <Note />
        <Features />
        <Instructions />
      </div>
    </>
  );
}

function MainContent({
  videoData,
  animation,
  fetchData,
  setUrlValue,
}: HomeProps) {
  const location = useLocation();

  const showHeaderFooter = location.pathname !== "/ads.txt";

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              videoData={videoData}
              animation={animation}
              fetchData={fetchData}
              setUrlValue={setUrlValue}
            />
          }
        />
        <Route path="tutorial" element={<HowToUse />} />
        <Route path="about" element={<About />} />
        <Route path="terms" element={<Tou />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ads.txt" element={<Adstxt />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;

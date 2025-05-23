import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import PhotoFrame from "./PhotoFramePage";
import HomePageCTA from "../components/CountDown";
import Events from "../components/event";
import BeASponsorSection from "../components/BeASponsorSection";

const isInFacebookBrowser = () => {
  const ua = navigator.userAgent || "";
  return /FBAN|FBAV|FB_IAB|Messenger/.test(ua);
};

const Home = () => {
  const [showFbWarning, setShowFbWarning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isInFacebookBrowser()) {
      setShowFbWarning(true);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>DGHS Reunion25</title>
      </Helmet>

      {showFbWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-red-700 max-w-md w-full mx-4 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-2">⚠️ Unsupported Browser</h2>
            <p className="text-sm mb-4 text-gray-800">
              You're using Facebook or Messenger's in-app browser. For full
              functionality (like downloading your photo), please open this page
              in Chrome or Safari.
            </p>
            <p className="text-sm text-gray-600">
              👉 Tap the 3 dots or browser icon at the top and choose “Open in
              browser”
            </p>
          </div>
        </div>
      )}

      <PhotoFrame />
      <HomePageCTA />
      <Events />
      <BeASponsorSection />
    </div>
  );
};

export default Home;

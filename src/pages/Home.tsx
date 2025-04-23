import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
import PhotoFrame from "./PhotoFramePage";
import HomePageCTA from "../components/CountDown";
import Events from "../components/event";
import BeASponsorSection from "../components/BeASponsorSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>DGHS Reunion25</title>
      </Helmet>

      <PhotoFrame />
      <HomePageCTA />
      <Events />
      <BeASponsorSection />
    </div>
  );
};

export default Home;

import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
import PhotoFrame from "./PhotoFramePage";
import Events from "../components/event";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>DGHS Reunion</title>
      </Helmet>

      <PhotoFrame />
      <Events />
    </div>
  );
};

export default Home;

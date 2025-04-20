import { Helmet } from "react-helmet-async";

import { useEffect } from "react";
import PhotoFrame from "./PhotoFramePage";

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
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import errimage from "../assets/img/404page.png";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <img
            src={errimage}
            alt="Eror 404"
            className="w-[50%] sm:w-[80%] lg:w-[60%] mb-12 mx-auto"
          />
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            404 Not Found
          </h1>
          <p className="text-xl sm:text-4xl font-semibold text-gray-950 mb-8">
            Whoops! That page doesn’t exist.
          </p>
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mb-12"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;

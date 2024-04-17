import { Link } from "react-router-dom";
import "./banner.css";
export default function BannerHome() {
  return (
    <div
      className="bannerHome relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
          url('https://assets.website-files.com/5bb62929f4d1fd759a1dce2a/5bb76b6c73d32b5386b4d97a_banner.jpg')`,
      }}
    >
      <div
        className="absolute text-white"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="mb-2.5 text-center text-4xl max-sm:w-96">
          Perfect eCommerce Webflow
          <br />
          Template to Get Started
        </div>
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="bg-stone-950 text-center px-4 py-3 mt-2 buttonhover"
            style={{ width: "100px" }}
          >
            Get Start
          </Link>
        </div>
      </div>
    </div>
  );
}

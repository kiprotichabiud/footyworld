import { Link } from "react-router-dom"; 
import video1 from "../assets/football1.mp4"; 
import video2 from "../assets/football2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Live Football Updates
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          at Your Fingertips
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Stay updated with live scores, match highlights, and player stats from
        leagues around the world. Join now and never miss a moment!
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="/updates"
          className="bg-gradient-to-r from-green-400 to-green-900 py-3 px-4 mx-3 rounded-lg text-lg "
        >
          Learn More
        </Link>
        
      </div>
      
     
    </div>
  );
};

export default HeroSection;

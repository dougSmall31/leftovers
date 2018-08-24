import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Landing = () => {
  return (
    <div className="Landing">
      <div>
        {/* Hero banner */}
        <div className="hero_banner">
          <video
            poster="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSplash%2Fbrand-hero-poster.jpg"
            preload="auto"
            autoplay=""
            loop="loop"
            muted=""
          >
            <source
              src="https://media.blueapron.com/home_page/Splash/brand-hero.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero_content">
            <h1>The Future of Yesterday's Food, Today!</h1>
            <div>
              <Link to="/">
                <Button variant="extendedFab">View Meals</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* description paragraphs with acompaning images */}
        {/* description paragraphs with acompaning images */}
        {/* description paragraphs with acompaning images */}
      </div>
      {/* footer stuff */}
    </div>
  );
};
export default Landing;

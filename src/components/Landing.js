import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

const Landing = () => {
  return (
    <div className="Landing">
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
            <a href="/">
              <Button variant="extendedFab">View Meals</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="landing_shelf">
        <div className="shelf">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/meal-prep-0-1518560584.jpg" />
          <p>
            blah blah blah meal prep blah blah stuff thats food and whatever
            this is going to be a paragraph of stuff here look at the picture.
          </p>
        </div>
        <div className="shelf">
          <p>
            blah blah blah meal prep blah blah stuff thats food and whatever
            this is going to be a paragraph of stuff here look at the picture.
          </p>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/meal-prep-0-1518560584.jpg" />
        </div>
        <div className="shelf">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/meal-prep-0-1518560584.jpg" />
          <p>
            blah blah blah meal prep blah blah stuff thats food and whatever
            this is going to be a paragraph of stuff here look at the picture.
          </p>
        </div>
      </div>
      <div className="footer">
        <img
          className="footer_img"
          src="https://enrootmeals.com/images/gallery/Banner-3-1445057284.jpg"
        />
        <div className="footer_content">
          <h1>Get Started Today!</h1>
          <div>
            <Link to="/">
              <Button variant="extendedFab">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { useLanguage } from "../../context/LanguageContext";

import { ReactTyped } from "react-typed";
import { HiDownload } from "react-icons/hi";

import "./Hero.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";
import Stars from "./Stars";

function Hero() {
  const { globalTexts, language } = useLanguage();
  return (
    <section className="hero-container">
      <div className="content">
        <Stars />
        <div className="top-blur"></div>
        <div className="avatar-overlay">
          <img className="avatar" src="/assets/avatar/syny.png" alt="" />
        </div>

        <h1 className="hero-title">Ondřej Synek</h1>
        <p className="description">{globalTexts.greeting}</p>
        <p className="description-tech">
          <ReactTyped
            strings={[
              "Python",
              "Django",
              "PyQt",
              "JavaScript",
              "React JS",
              "TailWind CSS",
              "Bootstrap",
            ]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button
          text={globalTexts.heroButton}
          href={language === "cs" ? "/assets/cv_cs.pdf" : "/assets/cv_eng.pdf"}
          icon={<HiDownload className="icon" />}
        />
      </div>

      <div className="carousel">
        <Carousel />
      </div>
    </section>
  );
}

export default Hero;

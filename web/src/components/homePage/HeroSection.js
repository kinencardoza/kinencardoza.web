import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Hi I'm Kinen!</h1>
            <ParagraphText className="hero__text">
              I'm a software developer primarly focusing on data structures and algorithms.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
            <Button
              href="https://docs.google.com/document/d/13odVxb7C46rJEtfz_3GIu1lnUN51xgIrbnWtOEzp7O8/edit?usp=sharing.pdf"
              title="Download My Resume"
              download
              className="hero__button">
              View My Resume
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/kchome.jpg"
              alt="vr guy"
              placeholder="blurred"
              objectFit="center"
              objectPosition="{50% 30%}"
            
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;

import React from 'react';

const Banner = ({ titleBanner }: { titleBanner: String }) => {
    return (
        <div className="banner-container">
          <div className="banner">
            <div className="line-left"></div>
            <div className="bannertext">{titleBanner}</div>
            <div className="line-right"></div>
          </div>
        </div>
      );
}
 
export default Banner;

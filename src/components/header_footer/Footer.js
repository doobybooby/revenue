import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_footer">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">HD Volleyball</div>
                <div className="footer_copyright">
                    Beach, Grass, Indoor, We do 'em all.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
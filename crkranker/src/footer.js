import React from 'react';
import './footer.css'; // Assuming the CSS is in this file

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>Contact Me! chongd@rpi.edu</p>
                <ul className="footer-links">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-use">Terms of Use</a></li>
                </ul>
                <div className="social-media">
                    <a href="https://www.facebook.com/CRKingdomEN/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/CRKingdomEN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

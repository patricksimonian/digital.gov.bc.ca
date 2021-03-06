import React from 'react';
import '../../css/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <Link to="/" className="footerLink">
              Home
            </Link>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www2.gov.bc.ca/gov/content/home/disclaimer"
              target="_blank"
            >
              Disclaimer
            </a>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www2.gov.bc.ca/gov/content/home/privacy"
              target="_blank"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www2.gov.bc.ca/gov/content/home/accessible-government"
              target="_blank"
            >
              Accessibility
            </a>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www2.gov.bc.ca/gov/content/home/copyright"
              target="_blank"
            >
              Copyright
            </a>
          </li>
          <li>
            <a
              className="footerLink"
              href="https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services"
              target="_blank"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {

  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/volivers/" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-linkedin" style={{ fontSize: '1.75em' }}></i></a>
        <a href="https://github.com/volivers" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-github" style={{ fontSize: '1.75em' }}></i></a>
      </div>
      <div className="footer-copyright">
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container text-center">
        <p className="mb-1">
          © {new Date().getFullYear()} <strong>NewsMag</strong>. All rights reserved.
        </p>
        <p className="mb-0">
          Built with ❤️ using <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="text-decoration-none text-info">React</a> &{" "}
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="text-decoration-none text-info">Bootstrap</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

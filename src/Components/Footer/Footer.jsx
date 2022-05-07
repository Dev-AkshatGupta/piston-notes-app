import React from "react";
import { Github } from "Assets/Icons/Github";
import { LinkedIn } from "Assets/Icons/LinkedIn";
import { Twitter } from "Assets/Icons/Twitter";
function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
          <img
            src={require("./../../Assets/Images/FooterImage.png")}
            alt="piston-logo"
          />

          <span className="ml-3 text-xl">Adda</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 PistonAdda —
          <a
            href="https://twitter.com/Akshat86604233"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Akshat86604233
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-gray-500"
            href="https://github.com/Dev-AkshatGupta/piston-adda"
          >
            <Github />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://twitter.com/Akshat86604233"
          >
            <Twitter />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/akshat-gupta-257914157/"
          >
            <LinkedIn />
          </a>
        </span>
      </div>
    </footer>
  );
}

export { Footer };

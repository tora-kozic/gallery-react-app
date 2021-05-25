import React from "react";

const About = () => {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-md-8">
              <h1 className="py-3">Tora Kozic</h1>
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <hr />
              <h3>Education</h3>
              <p>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <hr />
              <h3>Contact</h3>
              <p>
                username@email.com
                <br />
                (123) 456 - 8790
              </p>
            </div>
            <div className="col-md-4">
              <img src="https://picsum.photos/500/800" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

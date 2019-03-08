import React, { Component } from 'react';
import lakebed from './lakebed.jpg';

function Home() {
  return (
    <div className="flex flex-wrap w-100 w-70-l mv3 center">
      <div className=" w-100 w-50-l tl tr-l flex flex-row flex-column-l justify-center ">
        <img
          src={lakebed}
          alt="Picture of lake bed"
          className="dn dib-l mw-40"
        />
      </div>
      <div className=" w-100 w-50-l tl ph2 ">
        <p className="ma0">
          I solve problems with code. I am most comfortable working with backend
          technologies such as Node.js, Express, Django, and Phoenix.
        </p>
        <p>
          Sending data between the front and backend? I am comfortable with REST
          and GraphQL. I also make beautiful, minimalist, and typographically
          sensitive frontends using Html, CSS, React, and Tachyons. I believe in
          helping the computer help me solve problems, so I enjoy using
          Typescript and modern ES6+ Javascript.
        </p>
      </div>
    </div>
  );
}

export default Home;

import React, { Component } from 'react';
import fernleaf from './fernleaf.jpg';

type Props = any;

class Skills extends Component<Props> {
  render() {
    return (
      <div className="Skills flex flex-wrap w-100 w-70-l mv3 center">
        <div className=" w-100 w-50-l tl tr-l flex flex-row flex-column-l justify-start ph2 relative">
          <div className="w-100">
            <img src={fernleaf} alt="Picture of bridge" className="dn di-l" />
          </div>
        </div>
        <div className="flex flex-wrap w-100 w-50-l tl ph2 mv0 ">
          <div className="dib w-100 w-50-ns">
            <h5 className="mv0">Languages</h5>
            <ul className="list pa0">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
            <h5>Libraries</h5>
            <ul className="list pa0">
              <li>Tachyons</li>
              <li>Passport</li>
              <li>Materialize</li>
              <li>Mapbox</li>
              <li>Pug</li>
            </ul>
            <h5>Databases</h5>
            <ul className="list pa0">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="dib w-100 w-50-ns">
            <h5 className="mv0">Frameworks</h5>
            <ul className="list pa0">
              <li>React</li>
              <li>Apollo</li>
              <li>Django</li>
              <li>Flask</li>
              <li>Node/Express</li>
            </ul>

            <h5>Architecture</h5>
            <ul className="list pa0">
              <li>REST</li>
              <li>GraphQL</li>
              <li>Model-Update-View</li>
              <li>Functional Light</li>
              <li>Async/Await</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

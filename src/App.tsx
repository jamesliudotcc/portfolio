import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Styling
import logo from './logo.svg';
import './App.css';

import Nameplate from './components/Nameplate';
import Photobar from './components/PhotoBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <div className="cf w-100 ">
          <Photobar />
        </div>
        <header className="cf w-100 pt4-l">
          <div className="w-70-l center">
            <div className="fn fl-l w-50-l">
              <Nameplate />
            </div>
          </div>
        </header>

        <Router>
          <div>
            <nav>
              <ul className="cf w-100 w-70-l list ph3 ph5-ns pv1 bt bb ma0 center">
                <li className="dib mr2">
                  <Link to="/">About</Link>
                </li>
                <li className="dib mr2">
                  <Link to="/skills">Skills</Link>
                </li>
                <li className="dib mr2">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="dib mr2">
                  <a
                    target="_blank"
                    href="https://www.dropbox.com/s/c8s440fhzut7in4/Liu-Resume-20190227-developer-2.pdf?dl=0"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <main className="cf w-100 center ">
              <Route exact path="/" component={Home} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
            </main>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;

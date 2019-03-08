import React, { Component } from 'react';
import { ReactComponent as Github } from './icons/github-icon.svg';
import { ReactComponent as Medium } from './icons/medium.svg';
import { ReactComponent as Linkedin } from './icons/linkedin.svg';
type Props = any;

class Footer extends Component<Props> {
  render() {
    return (
      <ul className="cf w-100 w-70-l list ph3 ph5-ns pv1 mv0 center">
        <li className="dib mr2">
          <a href="https://www.linkedin.com/in/jamesliudotcc/">LinkedIn</a>
        </li>
        <li className="dib mr2">
          <a href="https://github.com/jamesliudotcc/">Github</a>
        </li>
        <li className="dib mr2">
          <a href="https://medium.com/@jamesliudotcc">Medium</a>
        </li>
        <li className="dib mr2">
          <a href="mailto:james@jamesliu.cc" target="_blank">
            Email
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;

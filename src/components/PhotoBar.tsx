import React, { Component } from 'react';
import river from './cropped-airplanewindow1w.jpg';

type Props = any;

class Photobar extends Component<Props> {
  render() {
    return (
      <div className="Photobar">
        <div className="cf w-100">
          <img className="cf w-100 w-70-l" src={river} alt="" />
        </div>
      </div>
    );
  }
}

export default Photobar;

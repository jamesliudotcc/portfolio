import React, { Component } from 'react';

type Props = any;

class Nameplate extends Component<Props> {
  render() {
    return (
      <div className="Nameplate cf">
        <h1 className="tr-l">James Liu</h1>
        <h3 className="tr-l">Full stack web developer</h3>
      </div>
    );
  }
}

export default Nameplate;

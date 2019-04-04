import React, { Component } from 'react';

class Pin extends Component {
  render() {
    return (
      <div>
        <img
          className="marker-pin"
          src="/assets/marker-pin-blackStroke.png"
          draggable="false"
          alt="Bueller lives here."
        />
      </div>
    );
  };
};

export default Pin;

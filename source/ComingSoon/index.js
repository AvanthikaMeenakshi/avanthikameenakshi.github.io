import React from 'react';
import Particles from 'react-particles-js';

const ComingSoon = () => (
  <div className="coming-soon">
    <Particles
        className="particles-wrapper"
        params={{
          "particles": {
              "number": {
                  "value": 50,
              },
              "size": {
                  "value": 3
              },
              "color": {
                "value": "#ff524e"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }}
    />
    <h1 className="text-coming-soon">Coming Soon!</h1>
  </div>
)


export default ComingSoon;

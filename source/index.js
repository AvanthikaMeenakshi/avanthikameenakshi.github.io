import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';

class App extends React.Component{
    render(){
        return(
          <Particles
            style={{
              backgroundColor: "#b61924"
            }}
            params={{
              "particles": {
                  "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                  },
                  "size": {
                      "value": 3
                  },
                  "color": {
                    "value": "#ffffff"
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

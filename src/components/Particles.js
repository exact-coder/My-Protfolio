import React from 'react'
import Particles from 'react-particles-js'

export default function Particle() {
    return (
        <>
            <Particles width="100%" height="100vh"
               params={{
                  "particles": {
                    "number": {
                      "value": 300,
                      "density": {
                        "enable": false,
                        "value_area": 4486.748069095924
                      }
                    },
                    "color": {
                      "value": "#025a6c",
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 3
                      },
                    },
                    "opacity": {
                      "value": 0.1121687017273981,
                      "random": true,
                      "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 7.891850086415761,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 0,
                        "size_min": 0,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 0,
                      "color": "#ffffff",
                      "opacity": 0.16024100246771156,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 1842.7715283786831,
                        "rotateY": 1602.4100246771156
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 100,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
            }}
            />
        </>
    )
}

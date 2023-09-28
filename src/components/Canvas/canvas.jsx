import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../../css/canvas.css';

const canvas = () => {
  async function loadParticles(main){
    await loadFull(main)
  }

  return(
    <>
      <div className="tsparticles">
        <Particles
        id="tsparticles"
        init={loadParticles}
        options={{
          "fullScreen": {
              "enable": false,
              "zIndex": -1,
          },
          "particles": {
              "number": {
                  "value": 50,
                  "density": {
                      "enable": true,
                      "value_area": 400
                  }
              },
              "color": {
                  "value": "#000000"
              },
              "shape": {
                  "type": "circle",
                  "options": {
                      "sides": 5
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 10,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                      "enable": true,
                      "speed": 2,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#000000",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": ["grab"]
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 140,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 3
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "background": {
              "color": "#6F61C0",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "height": "500px"
        }
        }}
        />
        </div>
    </>
  )
};

export default canvas;
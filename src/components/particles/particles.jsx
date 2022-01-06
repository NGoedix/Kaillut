import React from 'react';
import Particles from "react-tsparticles";

const app = function Main() {
  return (
    <React.Fragment>
        <Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "",
                },
            },
            fpsLimit: 120,
            interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "bounce",
                },
                resize: false,
            },
            modes: {
                bubble: {
                    distance: 600,
                    duration: 2,
                    opacity: 0.5,
                    size: 50,
                },
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 200,
                    duration: 6,
                },
            },
            },
            particles: {
                color: {
                    value: "random",
                },
                links: {
                    color: "",
                    distance: 150,
                    enable: false,
                    opacity: 0.5,
                    width: 6,
                },
                collisions: {
                    bounce: false,
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    bounce: false,
                    outMode: "bounce",
                    random: false,
                    speed: {
                        min: 1,
                        max: 1.5
                    },
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        value_area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: false,
                    value: {
                        min: 5,
                        max: 10
                    }
                },
            },
            detectRetina: true,
        }}
        />
    </React.Fragment>
  )
}


export default app;
import React from 'react';
import Particles from "react-tsparticles";

import '../../styles.css'

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
            fpsLimit: 60,
            interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: "slow",
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
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        value_area: 800,
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 8,
                },
            },
            detectRetina: true,
        }}
        />
    </React.Fragment>
  )
}


export default app;
import React from "react";
import "tachyons";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 130,
              density: {
                enable: true,
              },
            },
            
          },
        }}
        className="particles"
      />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;

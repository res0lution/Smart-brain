import React, { useState } from "react";
import Clarifai from "clarifai";
import "tachyons";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "",
});

function App() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onInputChange = (event) => setInput(event.target.value);

  const onSubmit = () => {
    setImgUrl(input)
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      function (response) {},
      function (err) {}
    );
  };

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
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onSubmit} />
      <FaceRecognition imageUrl={imgUrl}/>
    </div>
  );
}

export default App;

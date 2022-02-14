import React, { useState } from "react";
import ohSnapPic from "./OhSnap-demo-1_300x300.png";

function OhSnap() {
  return (
    <figure>
      <img src={ohSnapPic} alt="Oh Snap Image App" />

      <figcaption>
        <a href="https://dillanthomas88.github.io/OhSnapImageApp/">
          Oh Snap! Image App
        </a>
        is a fun way to combine the weather, the time of day, and where you are (or want to be) to provide a unique image search for just you.
      </figcaption>
    </figure>
  );
}

export default OhSnap;
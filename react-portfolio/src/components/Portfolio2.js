import React, { useState } from "react";
import ohSnapPic from "./OhSnap-demo-1_300x300.png";

function Portfolio2() {
  return (
    <section id="portfolio2">
      <img src={ohSnapPic} alt="Oh Snap Image App" />

      <p>
        <a href="https://dillanthomas88.github.io/OhSnapImageApp/">
          Oh Snap! Image App
        </a>
        is a fun way to combine the weather, the time of day, and where you are (or want to be) to provide a unique image search for just you.
      </p>
    </section>
  );
}

export default Portfolio2;
import React, { useState } from "react";
import sciFiPic from "./sciFiApiSearchApp.png";

function SciFiAPI() {
  return (
    <figure>
      <img src={sciFiPic} alt="Sci-Fi TV Show API Search App" />

      <figcaption>
        <a href="https://davisransom.github.io/sci-fi-tvshow-hub/">
          Sci-Fi TV Show Hub
        </a>
        is a simple API app that users can go to in order to gather all of the
        information about any of their favorite Sci-Fi tv shows.{" "}
      </figcaption>
    </figure>
  );
}

export default SciFiAPI;

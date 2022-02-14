import React, { useState } from "react";
import shadyMarketPlacePic from "./shadyMarketplace.png";

function ShadyMarketPlace() {
  return (
    <figure>
      <img src={shadyMarketPlacePic} alt="E-Commerce Store" />

      <figcaption>
        <a href="https://e-commerce-store-w-stripe-2022.herokuapp.com/">
          The Shady Marketplace
        </a>
        is a complete, working E-commerce site. The store uses Stripe to process
        payments.
      </figcaption>
    </figure>
  );
}

export default ShadyMarketPlace;

import React, { useState } from "react";
import shadyMarketPlacePic from "./shadyMarketplace.png";

function Portfolio1() {
  return (
    <section id="portfolio1">
      <img src={shadyMarketPlacePic} alt="E-Commerce Store" />

      <p>
        <a href="https://e-commerce-store-w-stripe-2022.herokuapp.com/">
          The Shady Marketplace
        </a>
        is a complete, working E-commerce site. The store uses Stripe to process
        payments.
      </p>
    </section>
  );
}

export default Portfolio1;
import React from "react";
import Heading from "../../common/Heading";

import "./hero.css";
function Hero({ username }) {
  // const [search, setSearch] = useState("");
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
           title="Search your next Home"
            subtitle="Find new & featured property located in your local city."
          />
        <div className="search">
          <input id="searchInput" className="clr" type="text" placeholder="Search  property..." />
          <i className="fa fa-search"></i>
        </div>
        
        </div>
      </section>
    </>
  );
}

export default Hero;

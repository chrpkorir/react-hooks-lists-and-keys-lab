import React from "react";

function NavBar(projects) {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a href="#home" key={projects.id}>Home</a>
  <a href="#about" key={projects.id}>About</a>
  <a href="#projects" key={projects.id}>Projects</a>
  </nav>;
}

export default NavBar;

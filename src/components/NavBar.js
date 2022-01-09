import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav> {links.map(ele => {
    return <a key={ele} href={`#${ele}`}>{ele}</a>
  })}
  </nav>
  )
}

export default NavBar;

import React from "react";
import "./Index.css";

function About() {
  return (
    <div>
      <h1>Użyte technologie - wymagane</h1>
      <ul className="lists-elements">
        <li>https://reactrouter.com/web/guides/quick-start</li>
        <li>https://recoiljs.org/</li>
        <li>https://theme-ui.com/</li>
        <li>https://gorest.co.in</li>
      </ul>
      <h2>Użyte technologie - dodatkowe</h2>
      <ul className="lists-elements">
        <li>https://material-ui.com/</li>
        <li>https://colorhunt.co//</li>
      </ul>
    </div>
  );
}

export default About;

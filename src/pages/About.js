import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        As one of the leading pizza brands in Kenya, Mwita's Pizerria  continues to deliver the best tasting pizza using only the freshest ingredients. 
        The pizza dough is made fresh daily in store, and the all-natural tomato sauce is a blend of sun-ripened tomatoes, herbs and spices.
       Our slogan, “It must be the Pizza!” captures the reason why friends, colleagues and families come to enjoy our Famous pizzas.
       And with a great range to choose from, Pizzeria satisfies any hunger. 
        </p>
      </div>
    </div>
  );
}

export default About;

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
          If you ask us, pizza is one of the best foods on the planet. Whoever
          thought to roll out dough, top it with tomato sauce, sprinkle cheese,
          and then add meat, vegetables, and other delicious toppings deserves a
          medal. Or at least some kind of culinary award. It's bready and
          cheesy. What could be better? Pizza lives up to the hype every time.
          Not sure what to make for dinner? Order a pizza. Hosting a party?
          Order a pizza. Traveling around Italy while wearing a cute dress,
          classy sunglasses, speaking your best Italian, and riding on the back
          of a moped? Order a pizza. It's perfect in nearly every scenario.
          Another great thing about pizza is it's easy to make at home! Buy a
          premade crust and top it with your favorite toppings. Or put on your
          chef hat and make your own crust. Either way, it doesn't take much
          time and the end result is delicious.
        </p>
      </div>
    </div>
  );
}

export default About;

import { makeElement } from "../makeElement.js";
import { Menu } from "../Menu/Menu.js";
import "./style.css";
import pizzaImg from "../../../assets/resource/pizza1.png";
export function Home() {
    //Main Container
    const divContainer = document.getElementById("content");
    divContainer.innerHTML = "";
  
    //Left Container
    const header1 = makeElement(
      "h1",
      [{ id: "heading-first" }],
      ["The Tastiest & <strong>Best Pizza</strong> In The World"]
    );
    const paragraph1 = makeElement(
      "p",
      [{ id: "home-page-content" }],
      [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facere illo! Vero magnam obcaecati animi odit nesciunt? Cumque, odit? Beatae.",
      ]
    );
    const button1 = makeElement("button", [{ class: "viewbtn" }], ["View Menu"]);
    button1.addEventListener("click", Menu);
    const divLeft = makeElement(
      "div",
      [{ id: "left" }],
      [header1, paragraph1, button1]
    );
  
    //Right Container
    const newImg = makeElement("img", [{ src: pizzaImg }, { id: "pizzaImg" }]);
    const divRight = makeElement("div", [{ id: "right" }], [newImg]);
  
    divContainer.append(divLeft, divRight);
  }
  
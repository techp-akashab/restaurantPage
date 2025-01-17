import { makeElement } from '../makeElement';
import './about.css'

export function About() {
  const divContainer = document.getElementById("content");
  divContainer.innerHTML = "";

  const aboutHead = makeElement("h2", [{ id: "abouthead" }], ["About Us"]);
const aboutDescription = makeElement("p", [{id: "aboutDescription"}], ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet quos aut repellat sit vero ipsam, corrupti facere expedita, distinctio eaque ipsa delectus quibusdam officiis accusamus earum explicabo sint pariatur cumque soluta vitae architecto. Natus rem, alias amet, explicabo ea quaerat minima, fugiat illo vel corrupti doloremque cupiditate adipisci voluptatem."])

  const aboutDiv = makeElement("div", [{ id: "aboutDiv" }], [aboutHead, aboutDescription]);
  divContainer.append(aboutDiv);
}

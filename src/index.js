import { About } from "./components/About/About.js";
import { Home } from "./components/Home/Home.js";
import { Menu } from "./components/Menu/Menu.js";

document.getElementById("home").addEventListener("click", Home);
document.getElementById("about").addEventListener("click", About);
document.getElementById("menu").addEventListener("click", Menu);
document.getElementById("logo").addEventListener("click", Home);
document.addEventListener("DOMContentLoaded", Home);
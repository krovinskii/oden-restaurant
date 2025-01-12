import "./styles.css";
import { makeHome } from "./home.js";
import { makeMenu } from "./menu.js";
import { makeContact } from "./contact.js";
makeHome();
const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", makeHome);

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", makeMenu);
const contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", makeContact);

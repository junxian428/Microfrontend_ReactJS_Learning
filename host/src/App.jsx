import { render } from "solid-js/web";
//import Car from "remote/Car"
import "./index.scss";
import Car from "remote/Car";
import Person from "./Person";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div>Created By Junxian428</div>
    <Car />
    <Person />
  </div>
);
render(App, document.getElementById("app"));

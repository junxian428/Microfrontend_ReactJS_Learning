import { render } from "solid-js/web";

import "./index.scss";
import Car from "./Car";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <div>Created By Junxian428</div>
    <Car />
  </div>
);
render(App, document.getElementById("app"));

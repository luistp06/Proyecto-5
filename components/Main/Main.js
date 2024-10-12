import "./Main.css";
import {Productcard} from "../Productcard/Productcard";
import { smartphones } from "../../data/data";
export const Main= () => `
 <section class="splide" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
            <img src="https://st1.techlusive.in/wp-content/uploads/2023/10/samsung-galaxy-s24-series-1.jpg"></img>
            </li>
            <li class="splide__slide"><img src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/Xiaomi-14-Spaeter-globaler-Launch-laut-Leaker.jpg"></img></li>
            <li class="splide__slide"><img src="https://www.lavanguardia.com/andro4all/hero/2024/09/iphone-16-destacada.jpg?width=1200&aspect_ratio=16:9"></img></li>
          </ul>
        </div>
      </section>
   <section id="categorias"> 
   <button class="categoria" id="todoslink">Todos</button>
   <button class="categoria" id="iphonelink">iPhone</button>
   <button class="categoria" id="samsunglink">Samsung</button>
   <button class="categoria" id="reacondicionadoslink">Reacondicionados</button>
</section>
<section class="ofertas-container"></section>
 `

 export const InsertProducts = () => {
  const ofertas = document.querySelector(".ofertas-container");
 for (const smartphone of smartphones) {
   if (["novedad", "oferta"].includes(smartphone.estado)) {
      const div = document.createElement("div");
      div.innerHTML = Productcard(smartphone);
      div.classList.add('product-card', 'oferta');
      ofertas.appendChild(div);
 }
 }
}

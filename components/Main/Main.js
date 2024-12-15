import "./Main.css";
import {Productcard} from "../Productcard/Productcard";
import { smartphones } from "../../data/data";
import { linkProduct } from "../../utils/linkProduct.js";
import { Product} from "../../pages/product/product.js";

export const Main= () => `
 <section class="splide" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
            <img src="https://st1.techlusive.in/wp-content/uploads/2023/10/samsung-galaxy-s24-series-1.jpg"></img>
            </li>
            <li class="splide__slide">
            <img src="https://www.alezay.com/wp-content/uploads/2023/12/XIAOMI-14-PRO-BANNER-ALEZAY-KUWAIT.jpg">
            </li>
            <li class="splide__slide"><img src="https://www.apple.com/la/iphone-16/images/overview/welcome/hero_alt__ey5khbzf04eq_xlarge.png"></img></li>
          </ul>
        </div>
      </section>
   <section id="categorias"> 
   <button class="categoria" id="todoslink">Todos</button>
   <button class="categoria" id="iphonelink">IPhone</button>
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
      div.setAttribute("id", smartphone.id)
      ofertas.appendChild(div);
 }
 }
 const cards = ofertas.querySelectorAll(".product-card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    const id = card.getAttribute("id");
    linkProduct(Product, id);
  });

});


 }



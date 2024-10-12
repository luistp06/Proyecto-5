import "./shop.css";
import { cleanPage } from "../../utils/cleanPage";
import {Productcard} from "../../components/Productcard/Productcard";
import { smartphones } from "../../data/data";


export const Shop = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="principal">
    <aside id="filtros">
    <h2>Filtros</h2>
    <ul>
    <li>Precio</li>
  <li>Marcas</li>
 <li> Procesador</li>
  <li>Memoria Ram</li>
  <li>Tarjeta Gráfica</li>
  <li>Sistema Operativo</li>
  <li>Estado del Artículo</li>
  <li>Pulgadas</li>
  <li>Almacenamiento SSD</li>
  <li>Tipo de Portátil</li>
 <li> Idioma del Teclado</li>
 <li> Tipo Memoria</li>
 <li> Tipo Pantalla</li>
 <li> Conexiones</li>
 <li> Resolución</li>
  <li>Almacenamiento</li>
  <li>Frecuencia de Refresco</li>
 <li> Color</li>
 <li> Conectividad</li>
  <li>Baterías</li>
    </ul>
    </aside>
    <section class="products-container"></section>
    </section>
    `;
  const container = document.querySelector(".products-container");
  for (const smartphone of smartphones) {
    const div = document.createElement("div");
    div.innerHTML = Productcard(smartphone);
    div.setAttribute('class', 'product-card');
    container.appendChild(div);
  }
};

const tarantula= 0;

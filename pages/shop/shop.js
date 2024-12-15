import "./shop.css";
import { cleanPage } from "../../utils/cleanPage";
import {Productcard} from "../../components/Productcard/Productcard";
import { smartphones } from "../../data/data";
import { Product} from "../../pages/product/product.js";
import { linkProduct } from "../../utils/linkProduct.js";

export const Shop = (filtrarsmartphones,filteredsmartphones) => {
  if (!filtrarsmartphones) {
    filtrarsmartphones = filteredsmartphones; 
  }
  if (!filtrarsmartphones&&!filteredsmartphones) {
    filtrarsmartphones = smartphones; 
  }
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="principal">
   <button id="toggle-filters" class="toggle-button">Mostrar filtros</button>
    <aside id="filtros">
     <div id="filtros-container" class="hidden">
    <h2>Filtros</h2>
    <ul>
    <li id ="precio_filter"><label for="price">Precio Máximo: </label>
<input
  type="range"
  name="Precio"
  id="price"
  min="0"
  max="2000"
  step="50"
  value="2000" />
<output id="priceoutput" for="price"></output>
</li>
  <li id= "marca">
  <h4>Marca</h4>
              <label><input type="checkbox" name="marca" value="Apple"/> Apple </label>
              <label><input type="checkbox" name="marca" value="Samsung"/> Samsung </label>
              <label><input type="checkbox" name="marca" value="Google"/> Google </label>
              <label><input type="checkbox" name="marca" value="Xiaomi"/> Xiaomi </label>
              <label><input type="checkbox" name="marca" value="OnePlus"/> OnePlus </label>
  </li>
 <li id="estado"><h4>Estado</h4>
              <label><input type="checkbox" name="estado" value="novedad"  /> Nuevo </label>
              <label><input type="checkbox" name="estado"value="Reacondicionado"  /> Reacondicionado </label>
              <label><input type="checkbox" name="estado"value="oferta"  /> Oferta </label>
              </li>
  <li id="ram">
  <h4>Memoria Ram</h4>
              <label><input type="checkbox" name="ram" value="4GB" /> 4GB</label>
              <label><input type="checkbox" name="ram" value="6GB" /> 6GB</label>
              <label><input type="checkbox" name="ram" value="8GB" /> 8GB</label>
              <label><input type="checkbox" name="ram" value="12GB" /> 12GB</label
  </li>

  <li id="pulgadas"><h4>Pulgadas</h4>
              <label><input type="checkbox" name="pulgadas" value="<6"  /> < 6"</label>
              <label><input type="checkbox" name="pulgadas" value="6-6,5"  /> 6"-6,5"</label>
              <label><input type="checkbox" name="pulgadas" value=">6,5"  /> > 6,5"</label>
</li>
  <li id="almacenamiento"><h4>Almacenamiento</h4>
              <label><input type="checkbox" name="almacenamiento" value="64GB"  /> 64GB</label>
              <label><input type="checkbox" name="almacenamiento"  value="128GB"  /> 128GB</label>
              <label><input type="checkbox" name="almacenamiento" value="256GB"  /> 256GB</label>
              <label><input type="checkbox" name="almacenamiento" value="512GB"  /> 512GB</label>
  </li>
 <li id="color"> 
 <h4>Color</h4>
              <label><input type="checkbox" name="color" value="Negro"  /> Negro</label>
              <label><input type="checkbox" name="color" value="Blanco"  /> Blanco</label>
              <label><input type="checkbox" name="color" value="Morado"  /> Morado</label>
              <label><input type="checkbox" name="color" value="Dorado"  /> Dorado</label>
               <label><input type="checkbox" name="color" value="Verde"  /> Verde</label>

 </li>
    </ul>
    <button id= "filterbutton">Filtrar
    </button>
    </div>
    </aside>
    <section class="products-container"></section>
    </section>
    `;
    const toggleButton = document.getElementById("toggle-filters");
const filtrosContainer = document.getElementById("filtros-container");

toggleButton.addEventListener("click", () => {
  filtrosContainer.classList.toggle("hidden");

  // Cambia el texto del botón dependiendo del estado
  if (filtrosContainer.classList.contains("hidden")) {
    toggleButton.textContent = "Mostrar filtros";
  } else {
    toggleButton.textContent = "Ocultar filtros";
  }
});
 
    const container = document.querySelector(".products-container");
    const filterButton = document.getElementById("filterbutton");


    filterButton.addEventListener("click", function () {
      // Obtener todos los valores seleccionados de los filtros
      const selectedBrands = Array.from(document.querySelectorAll('input[name="marca"]:checked')).map(input => input.value);
      const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(input => input.value);
      const selectedStatus = Array.from(document.querySelectorAll('input[name="estado"]:checked')).map(input => input.value);
      const selectedRam = Array.from(document.querySelectorAll('input[name="ram"]:checked')).map(input => input.value);
      const selectedStorage = Array.from(document.querySelectorAll('input[name="almacenamiento"]:checked')).map(input => input.value);
      const selectedInches = Array.from(document.querySelectorAll('input[name="pulgadas"]:checked')).map(input => input.value);
      const maxPrice= priceInput.value

      const filteredSmartphones = smartphones.filter((smartphone) => {

        const brand = selectedBrands.length === 0 || selectedBrands.includes(smartphone.brand);
        const color = selectedColors.length === 0 || selectedColors.includes(smartphone.color);
        const estado = selectedStatus.length === 0 || selectedStatus.includes(smartphone.estado);
        const ram = selectedRam.length === 0 || selectedRam.includes(smartphone.ram);
        const storage = selectedStorage.length === 0 || selectedStorage.includes(smartphone.storage);
        const inches = selectedInches.length === 0 || selectedInches.includes(smartphone.inches);
        const price= smartphone.priceX<=maxPrice;
  
        return brand&&color&&estado&&ram&&storage&&inches&price;
        
      });
      
      if (filteredSmartphones.length === 0) {
        container.innerHTML = `<p>No hay productos que coincidan con tu búsqueda.</p>`;
      } else {
        container.innerHTML = "";
        for (const smartphone of filteredSmartphones) {
          const div = document.createElement("div");
          div.innerHTML = Productcard(smartphone);
          div.setAttribute("class", "product-card");
          div.setAttribute("id", smartphone.id)
          container.appendChild(div);
        }
        const cards = container.querySelectorAll(".product-card");

        cards.forEach(card => {
          card.addEventListener("click", function () {
            const id = card.getAttribute("id");
            linkProduct(Product, id);
          });
        });
      }
    });
    
    if (filtrarsmartphones.length === 0) {
      container.innerHTML = `<p>No hay productos que coincidan con tu búsqueda.</p>`;
    } else {

      for (const smartphone of filtrarsmartphones) {
        const div = document.createElement("div");
        div.innerHTML = Productcard(smartphone);
        div.setAttribute("class", "product-card");
        div.setAttribute("id", smartphone.id)
        container.appendChild(div);
      }
    }
    const cards = container.querySelectorAll(".product-card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    const id = card.getAttribute("id");
    linkProduct(Product, id);
  });
});
  
const priceInput = document.getElementById("price");
const priceOutput = document.getElementById("priceoutput");

priceInput.addEventListener("input", () => {
  priceOutput.textContent = priceInput.value; 
});
  };


 


 
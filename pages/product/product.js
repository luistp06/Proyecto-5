import "./product.css";
import { cleanPage } from "../../utils/cleanPage";
import { smartphones } from "../../data/data";


export const Product = (id) => {
const main = document.querySelector("main");
  cleanPage(main);
  
const smartphone = smartphones.find((element)=> element.id === id);
    
  main.innerHTML = `
  <div id = "general">
    <img src="${smartphone.image}" alt="${smartphone.name}" id="imagen">
    <section id="texto">
    <h2>${smartphone.name}</h2>
    <p>${smartphone.description}</p>
    <h4 id="finalPrice">${smartphone.price}</h4>
    <section id="caracteristicas">
    <h2>Caracteristicas</h2>
     <table>
       <tr>
        <th>Marca</th>
        <td>${smartphone.brand}</td>
      </tr>
       <tr>
        <th>Color</th>
        <td>${smartphone.color}</td>
      </tr>
       <tr>
        <th>Ram</th>
        <td>${smartphone.ram}</td>
      </tr>
       <tr>
        <th>Almacenamiento</th>
        <td>${smartphone.storage}</td>
      </tr>
      <tr>
        <th>Tamaño de pantalla</th>
        <td>${smartphone.screen}</td>
      </tr>
      </table>
    </section >
    <div id="buttons">
    <button id = "comprar">Comprar Ya</button>
    <button id = "añadir">Añadir a la cesta</button>
    </div>
    </section>
    <div/>

    
    
    `
}

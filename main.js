
import  {header} from "./components/header/header";
import  {Main} from "./components/Main/Main";
import  {InsertProducts} from "./components/Main/Main";
import  {footer}  from "./components/footer/footer";
import { linkPage } from "./utils/linkPage.js";
import { Shop} from "./pages/shop/shop";
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import './style.css'
import { smartphones } from "./data/data";

const headerinsert= document.querySelector("header")
headerinsert.innerHTML= header()

const maininsert = document.querySelector("main");
maininsert.innerHTML = Main(); 


const footerinsert = document.querySelector("footer");
footerinsert.innerHTML = footer();


linkPage("#todoslink", Shop);
linkPage("#homelink",Main );




var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 1,
    autoplay: true, 
    pagination: false, 
    interval: 3000, 
    arrows:false,
  } );
  
  splide.mount();
  InsertProducts();


  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buscarBtn").addEventListener("click", function () {
      const inputValue = document.getElementById("buscar").value.toLowerCase(); 
     
      const filtrarsmartphones = smartphones.filter((smartphone) =>
        smartphone.name.toLowerCase().includes(inputValue)||smartphone.description.toLowerCase().includes(inputValue) 
      );
    
      
      Shop(filtrarsmartphones); 
    });
  });






  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("iphonelink").addEventListener("click", function () {

     
      const filtrariphones = smartphones.filter((smartphone) =>
        smartphone.name.toLowerCase().includes("iphone")||smartphone.description.toLowerCase().includes("iphone") 
      );
    
      
      Shop(filtrariphones); 
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("samsunglink").addEventListener("click", function () {

     
      const filtrarsamsung = smartphones.filter((smartphone) =>
        smartphone.name.toLowerCase().includes("samsung")||smartphone.description.toLowerCase().includes("samsung") 
      );
    
      
      Shop(filtrarsamsung); 
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reacondicionadoslink").addEventListener("click", function () {

     
      const filtrarreacondicionados = smartphones.filter((smartphone) =>
        smartphone.name.toLowerCase().includes("reacondicionado")||smartphone.description.toLowerCase().includes("Reacondicionado") 
      );
    
      
      Shop(filtrarreacondicionados); 
    });
  });
  
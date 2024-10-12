
import  {header} from "./components/header/header";
import  {Main} from "./components/Main/Main";
import  {InsertProducts} from "./components/Main/Main";
import  {footer}  from "./components/footer/footer";
import { linkPage } from "./utils/linkPage.js";
import { Shop} from "./pages/shop/shop";
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import './style.css'

const headerinsert= document.querySelector("header")
headerinsert.innerHTML= header()

const maininsert = document.querySelector("main");
maininsert.innerHTML = Main(); 


const footerinsert = document.querySelector("footer");
footerinsert.innerHTML = footer();


linkPage("#todoslink", Shop);
linkPage("#iphonelink", Shop);
linkPage("#samsunglink", Shop);
linkPage("#reacondicionadoslink", Shop);
linkPage("#homelink",Main );




var splide = new Splide( '.splide', {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
  } );
  
  splide.mount();
  InsertProducts();

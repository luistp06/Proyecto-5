import "./header.css";

export const header= () => `
<nav>
<button id="menuBtn">
<img src="assets/menu.png">
</button>
<button id="logo">
<a href="/" id="homelink"><h2 id="title">
    Smartphone <span>Zone</span>
</h2>
</a>
</button>
<div id= "inputcontainer">
    <input type="text" placeholder="Buscar" id ="buscar">
    <img src="assets/lupa.png">
</div>
<button id="user" class="purplebtn">
<img src="assets/usuario.png">
<p>Mi Cuenta</p>
</button>
<button id="basket" class="purplebtn">
<img src="assets/carro.png">
<p>Mi Cesta</p>
</button>
</nav>
 `
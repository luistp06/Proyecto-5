import "./header.css";


export const header= () => `
<nav>
<button id="logo">
<a href="/" id="homelink"><h2 id="title">
    Smartphone <span>Zone</span>
</h2>
</a>
</button>
<div id="inputcontainer">
  <input type="text" placeholder="Buscar" id="buscar">
  <button id="buscarBtn">
    <img src="assets/lupa.png" alt="Buscar">
  </button>
</div>
<button id="user" class="purplebtn">
<img src="assets/cuenta.png">
<p>Mi Cuenta</p>
</button>
<button id="basket" class="purplebtn">
<img src="assets/cesta2.png">
<p>Mi Cesta</p>
</button>
</nav>
 `

 
import "./Productcard.css";
export const Productcard = (smartphone) => `
  <button class="cardBtn" >
    <img src="${smartphone.image}" alt="${smartphone.name}">
    <h3>${smartphone.name}</h3>
    <div id ="DivNumbers">
    <h4 id="precio">${smartphone.price}</h4>
      <div id ="rating">
     <h4>${smartphone.rating}<h4>
     <img src="assets/estrella.png" id="estrella">
     </div>
     </div>
    </button>
  
`;
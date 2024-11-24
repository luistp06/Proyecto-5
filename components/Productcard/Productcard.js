import "./ProductCard.css";
export const Productcard = (smartphone) => `
  <button class="cardBtn" >
    <img src="${smartphone.image}" alt="${smartphone.name}">
    <h3>${smartphone.name}</h3>
    <h4>${smartphone.price}</h4>
     <h5>${smartphone.rating}⭐<h5>
     <p>${smartphone.description}</p>
    </button>
  
`;
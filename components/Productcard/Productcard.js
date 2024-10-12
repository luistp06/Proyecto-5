import "./ProductCard.css";
export const Productcard = (smartphone) => `
<img src=${smartphone.image} alt=${smartphone.name}/>
<div class="header">
<h2>${smartphone.name}</h2>
<div>
<p>${smartphone.price}</p>
</div>
</div>
<div class="detail">
<p>${smartphone.description}</p>
</div>
`;
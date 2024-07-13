class Product{
  title='DEFAULT';
  imageUrl;
  defination;
  price;

  constructor(title,imag,desc,price){
    this.title=title;
    this.imageUrl=imag;
    this.defination=desc;
    this.price=price;
  };
}


const productList = {
  products: [
    new Product("pillow",'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',"a soft pillow!",19.99),
    new Product("carpet",'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',"a carpet!",89.99)
  ],
  //render: function () {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;

      prodList.append(prodEl);
      renderHook.append(prodList);

      //prodEl.textContent = prod;
    }
  },
};
productList.render();
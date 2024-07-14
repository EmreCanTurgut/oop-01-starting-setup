class Product {
  // title='DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, imag, desc, price) {
    this.title = title;
    this.imageUrl = imag;
    this.description = desc;
    this.price = price;
  }
}


class ProductItem {
  constructor(product) {    
    this.product = product;     //ProductItem clasına product isimli özellik ekler değeri de constructor ile çeker
  }


  addToCart(){
    console.log("Adding product ot the cart...");
    console.log(this);
    console.log(this.product);
  }


  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      const addCartButton=prodEl.querySelector('button');// bütün butonları seçmesin diye prodEl.query yaptık

    addCartButton.addEventListener('click',this.addToCart.bind(this));
    return prodEl;
  }
}


class ProductList {
  products = [
    new Product(
      "pillow",
      "https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg",
      "a soft pillow!",
      19.99
    ),
    new Product(
      "carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      "a carpet!",
      89.99
    ),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.render();

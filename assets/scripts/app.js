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

class ShoppingCart{
  items=[];

  addProduct(product){
    this.items.push(product);
    this.totalOutput= `<h2>Total: \$${1}</h2>`
  }

  render() {
    const cartEl=document.createElement("section");
    cartEl.innerHTML=`
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className='cart';
    this.totalOutput=cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {    
    this.product = product;     //ProductItem clasına product isimli özellik ekler değeri de constructor ile çeker
  }


  addToCart(){
    console.log("Adding product ot the cart...");
    ShoppingCart.addProduct();
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
    
    addCartButton.addEventListener('click',this.addToCart.bind(this)); //?
    return prodEl;
  }
}


class ProductList {
  products = [
    new Product(
      "pillow",
      "img",
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
  constructor() {} //?
  render() {
    
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;  
  }
}

class Shop{
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl= cart.render();
    const productList = new ProductList();
    const prodListEL=productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEL);

    
  }
}

class App{

 static init(){
  const shop= new Shop();
  shop.render();
  }
}

App.init(); // init static oldugu için bu şekilde çalışıtrabiliryoruz

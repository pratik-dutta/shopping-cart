import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: "Phone",
                qty: 1,
                img: "",
                id:1
            },
            {
                price: 999,
                title: "Watch",
                qty: 1,
                img: "",
                id:2
            },
            {
                price: 999,
                title: "Laptop",
                qty: 1,
                img: "",
                id:3
            }
        ]
    }
    // this.increaseQty = this.increaseQty.bind(this);
}
handleIncreaseQty = (product) => {
    console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products 
        //or
        //products = products
    });
}
handleDecreaseQty = (product) => {
    console.log(product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products 
        //or
        //products = products
    });
}
handleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    
    this.setState({
        products : items
    });
}

getCartCount = () => {
  const {products} = this.state;

  let count=0;

  products.forEach((product) => {
    count += product.qty;
  });

  return count;
}

getTotalAmount = () => {
  const {products} = this.state;
  let amount = 0;
  
  products.forEach((product) => {
    amount += product.price;
  });

  return amount;
}

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products = {products}
        onIncreaseQty = {this.handleIncreaseQty}
        onDecreaseQty = {this.handleDecreaseQty}
        onDelete = {this.handleDelete}
        />
        <div>
          Total : {this.getTotalAmount()}
        </div>
      </div>
    );
  }
}

export default App;

const { useState, createContext, useContext } = React;
const Context = React.createContext();

class Item extends React.Component {
  constructor(props) {
    super(props);    
    
    this.id = props.id;
    this.name = props.name;
    this.image = props.image;
    this.price = props.price;
    this.description = props.description;
  }
  
}

class ItemCarro extends Item{
  constructor(props) {
    super(props);    
    this.quantity=props.quantity;
    this.addtoCarro = props.addtoCarro;
    this.removeFromCarro = props.removeFromCarro;
  }
  render() {
    return(
      <div className="row cartItem">
        <div className="col-sm-3"><img className="cart_image" src={this.image}></img></div>
        <div className="col-sm-3">{this.props.quantity} x {this.props.name}</div>
        <div className="col-sm-3"><button className="button-6 small" onClick= { 
            () => {
              this.addtoCarro({id:this.id, name:this.name, image:this.image, price:this.price, description:this.description});
            }
          }>+</button><button className="button-6 small" onClick= { 
            () => {
              this.removeFromCarro({id:this.id, name:this.name, image:this.image, price:this.price, description:this.description});
            }
          }>-</button></div>
          <div className="col-sm-3">{this.props.price*this.props.quantity}&euro;</div>
      </div>
    );
  }
}

class ItemProductos extends Item{
  constructor(props) {
    super(props);    
    this.addtoCarro = props.addtoCarro;
  }

  render() {
    return(
      <div className="product">        
        <div className="productimage"><img className="product_image" src={this.image}></img></div>
        <div className="productname">{this.name} <b>{this.price}&euro;</b></div>
        <div className="productdesc">{this.description}</div>
        <div>
          <button className="button-6" onClick= { 
            () => {
              this.addtoCarro({id:this.id, name:this.name, image:this.image, price:this.price, description:this.description});
            }
          }>
          Add
          </button>
        </div>
      </div>
    );
  }

}


class Productos extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {items: props.items};
  }
  
  render() {
    //console.log("prod items: "+this.props.items)
    return (
      <div className="col-sm-8">
            {this.props.items}
      </div>
    );
  }
}

class Carro extends Productos {
  constructor(props) {
    super(props);    
    //this.state = {items: props.items};
  }

  render() {
    //console.log("items: "+this.props.items)
    return (
      <div className="col-sm-4">
        <div className="position-fixed">
        <fieldset>
          <legend>My Cart</legend>

          {this.props.items}
          <div className="col-sm-12">{this.props.total}</div>
        </fieldset>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);    
    this.myvar='aaaaaaaa';    
    this.state={
      items_in_carro:[],
      items_in_productos:[{id:"1",name:"aaa",description:"aaaaaaaaa"},
        {id:"2",name:"bbb",description:"bbbbbbbbbbbb"}
      ]
    };
  }

  componentDidMount(props, state) {
    this.getProducts()
  }

  async getProducts() {
    // With error handling
    fetch("remote/getProducts.php")
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState(json)
          return json;
        });
        //console.log(json);
        //this.setState({ items_in_productos: json })
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
      })
      .catch(error => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  
  
  render()
  {
    console.log("rendering App")
    console.log(this.state.items_in_carro);
    console.log(this.state.items_in_productos);
    return(
      <div className="row">
        <Productos items={
          this.state.items_in_productos.map((item) => 
            (<ItemProductos key={item.id} id={item.id} 
                image={item.image} price={item.price}
                name={item.name} description={item.description} addtoCarro={this.addtoCarro.bind(this)}/>))
         }
        />
        <Carro total={this.total()} items={
          this.state.items_in_carro.map((item) => 
            (<ItemCarro key={item.id} id={item.id} 
                image={item.image} price={item.price}
                quantity={item.quantity}
                name={item.name} description={item.description} addtoCarro={this.addtoCarro.bind(this)}
                removeFromCarro={this.removeFromCarro.bind(this)}
                />))
         }
        />
      </div>
    );
  }

  total()
  {
    let total=0;
    for(let i=0;i<this.state.items_in_carro.length;i++)
    {
      total+=this.state.items_in_carro[i].price * this.state.items_in_carro[i].quantity;
    }
    if(total==0)
      return "";
    return "Total: "+total.toString()+"€";
  }


  addtoCarro(item)
  {
    function mycarrofinder(e)
    {
      return e.id==item.id;
    }
    //console.log("myvar: "+this.myvar);
    let st=this.state;
    let e=st.items_in_carro.findIndex(mycarrofinder)
    if(e === -1)
    {
      item.quantity=1;
      st.items_in_carro.push(item);
    }
    else{
      st.items_in_carro[e].quantity++;
    }
    this.setState(st)
    //var x=this.render()
    //console.log(x)
    
  }

  removeFromCarro(item)
  {
    function mycarrofinder(e)
    {
      return e.id==item.id;
    }
    //console.log("myvar: "+this.myvar);
    let st=this.state;
    let e=st.items_in_carro.findIndex(mycarrofinder)
    if(e === -1)
    {
      
    }
    else{
      st.items_in_carro[e].quantity--;
      if(st.items_in_carro[e].quantity==0)
      st.items_in_carro.splice(e,1);
    }
    this.setState(st)
    //var x=this.render()
    //console.log(x)
    
  }
  
}

// ========================================


const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />);



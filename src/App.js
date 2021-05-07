import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jasim', 'Riyaj', 'Ferdous', 'Bappy', 'Shuvo']
  const products=[
    {name:'Photoshop',price:'10.99'},
    {name:'Illustrator',price:'5.99'},
    {name:'PDF Reader',price:'2.99'},
    {name:'Game Loop',price:'5.99'}
    ]
  const friends = [
    {name:'Anup', age:'22'},
    {name:'Joydeb', age:'23'},
    {name:'Prodip', age:'21'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>My first react site</h1>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>  
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      {
        friends.map(fd => <Friends friend={fd}></Friends>)
      }
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div> 
  )
}
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <h2>{user.email}</h2>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid green',
    margin:'20px',
    backgroundColor:'grey',
    borderRadious:'10px',
    height:'250px',
    width:'300px',
    float:'left'
  }
  const{name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>Price:{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Friends(props){
  const {name, age} = props.friend;
  return(
    <div>
      <h2>Name:{name}</h2>
      <h3>Age:{age}</h3>
    </div>
  )
}



export default App;

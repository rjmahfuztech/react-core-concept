import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends = ['Nahid', 'Zahid', 'Arafat', 'Rifat', 'Mizan', 'Abbas'];
  const products = [
    {name: 'Laptop', price: '$450'},
    {name: 'Phone', price: '$190'},
    {name: 'Watch', price: '$47'},
    {name: 'Mask', price: '$4.89'}
  ];
  // const friendNames = friends.map(fd => <li>{fd}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Learner</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {friends.map(fd => <li>{fd}</li>)}
          {
            products.map(pd => <li>{pd.name}</li>)
          }
        </ul>
        {
          products.map(chees => <Product pd = {chees}></Product>)
        }
        {/* <Product pd = {products[0]}></Product>
        <Product pd = {products[1]}></Product>
        <Product pd = {products[2]}></Product> */}
        {/* <Person name = "Mahfuz Islam" profession = "Programming Learner"></Person>
        <Person name = "Zahid Hasan" profession = "Student"></Person>
        <Person name = "Istiak Ahmed" profession = "Chater"></Person>
        <Person name = "Jubair Ahmed" profession = "Funny"></Person> */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    height: '200px',
    backgroundColor: 'darkgray',
  }
  const {name, price} = props.pd;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

// function Person(props){
//   console.log(props);
//   const Style = {
//     border: '1px solid lime',
//     borderRadius: '20px',
//     padding: '20px',
//     margin: '20px',
//     width: '400px'
//   }
//   return (
//     <div style={Style}>
//       <h3>Name: {props.name}</h3>
//       <p>I am a {props.profession}</p>
//     </div>
//   );
// }


export default App;

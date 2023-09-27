import React from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "charger", quantity: 12, packed: true },
  { id: 2, description: "asd", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do You Need For Your Trip</h3>
    </div>
  );
}
function PackagingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>you have X itema in Your List and You Have Packed X </em>
    </footer>
  );
}

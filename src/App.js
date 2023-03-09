import "./App.css";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import Brand from "./components/Brand";
import LoadMore from "./components/LoadMore";
import Category from "./components/Category";
import AddProduct from "./components/AddProduct";

let buttonNames = [
  {
    name: "All Products",
    value: "all",
    componentName: <Products/>
  },
  {
    name: "Load More",
    value: "load",
    componentName: <LoadMore/>
  },
  {
    name: "Filter by Category",
    value: "fCategory",
    componentName: <Category/>
  },
  {
    name: "Filter by Brand",
    value: "fBrand",
    componentName: <Brand/>
  },
  {
    name: "Add Product",
    value: "add",
    componentName: <AddProduct/>
  },
];

function App() {
  const [current, setCurrent] = useState(buttonNames[0]);
    useEffect (()=>{
      if(localStorage.getItem("buttonVal") ) {
        buttonNames.find((btn) => btn.value === localStorage.getItem("buttonVal"))
      }
    }, []);
  ;

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.getItem("buttonVal", btn.value);
  }

  return (
    <div className="App">
      <div className="buttons">
        {buttonNames.map((btn, index) => (
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={current.value === btn.value ? "activeBtn" : "inactiveBtn"}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.componentName}</div>
      {/* <div>{current === "load" && <LoadMore/>}</div>
      <div>{current === "fBrand" && <Brand/>}</div>
      <div>{current === "fCategory" && <Category/>}</div>
      <div>{current === "add" && <AddProduct/>}</div> */}
    </div>
  );
}

export default App;

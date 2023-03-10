import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../styles/products.css";
import { useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/brands")
      .then((brands) => setBrand([...brands.data]));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {brand &&
            brand.map((aye, index) => {
              return (
                <tr key={index}>
                  <td>{aye.id}</td>
                  <td>{aye.name}</td>
                  <td>{aye.name}</td>
                  <td>{aye.price}</td>
                  <td>{aye.brand}</td>
                  <td>{aye.category}</td>
                  <td>{aye.sale}%</td>
                  <td className="tdButtons">
                    <button>Edit</button>/
                    <button className="deleteButton">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

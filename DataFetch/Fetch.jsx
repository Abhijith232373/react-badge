import React, { useEffect, useState } from "react";

function Fetch() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);


  return (
    <div>
      <h2>Products</h2>
      {visibleProducts.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <p>Rs {p.price}</p>
          <img src={p.image} width="80"/>
          <hr />
        </div>
      ))}

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span> Page {page} of {totalPages} </span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>

      <h3>Cart</h3>
      {cart.map((item, i) => (
        <p key={i}>{item.title}</p>
      ))}
    </div>
  );
}

export default Fetch;
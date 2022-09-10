import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import data from "../data";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((prod) => (
          <div className="product" key={prod.slug}>
            <Link to={`/product/${prod.slug}`}>
              <img src={prod.image} alt={prod.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${prod.slug}`}>
                <p>{prod.name}</p>
              </Link>
              <p>
                <strong>${prod.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

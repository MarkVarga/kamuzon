import "./App.css";
import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">kamuzon</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((prod) => (
            <div className="product" key={prod.slug}>
              <a href={`/product/${prod.slug}`}>
                <img src={prod.image} alt={prod.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${prod.slug}`}>
                  <p>{prod.name}</p>
                </a>
                <p>
                  <strong>${prod.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

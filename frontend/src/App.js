import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./view/HomeScreen";
import ProductScreen from "./view/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">kamuzon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

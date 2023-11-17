import "./App.css";
import Carousel from "./components/Header/Carousel";
import Category from "./components/Product/Category";
import ProductList from "./components/Product/ProductList";
function App() {
  return (
    <div className="mx-auto container">
      <Carousel />
      <Category />
    </div>
  );
}

export default App;

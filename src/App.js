import Categories from "./components/Categories.jsx";
import Header from "./components/Header.jsx";
import PizzaBlock from "./components/PizzaBlock.jsx";
import Sort from "./components/Sort.jsx";
import { db } from "./db";

function App() {
  const categories = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const items = db.pizzas;
  console.log(items);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories categories={categories} />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((item) => (
                <PizzaBlock key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

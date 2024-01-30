import pizza from "../../assets/icons/pizza.png";
import burger from "../../assets/icons/burger.png";
import salad from "../../assets/icons/salad.png";
import combo from "../../assets/icons/combo.png";

const PopularCategories = () => {
  return (
    <div>
      <h1>Our Popular Categories</h1>
      <div>
        <button>
          <img src={pizza} alt="pizza" /> <h3>Pizzas</h3>
        </button>
      </div>
      <div>
        <h4>Pepperoni Pizza</h4>
        <p>Di napoles</p>
        <p>$11,99</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default PopularCategories;

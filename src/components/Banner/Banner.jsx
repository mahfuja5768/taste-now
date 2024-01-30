import foodImg from "../../assets/images/Food Background 2 1.png";
import splash from "../../assets/images/Splash food 1.png";
const Banner = () => {
  return (
    <div>
      <div className="banner_content">
        <h1>Experience food Delivery like no other</h1>
        <p>
          We deliver the food of your choice wherever, whenever. Select your
          food from only the top restaurants in the area, and get it in a flash.
          Download the app now to discover more.
        </p>
      </div>
      <div className="banner_pic">
        <img src={foodImg} alt="foodImg" />
        <img src={splash} alt="splash" />
      </div>
    </div>
  );
};

export default Banner;

import envImg from "../../../assets/images/env.png";
const Environment = () => {
  return (
    <>
      <div>
        <img src={envImg} alt="envImg" />
      </div>
      <div>
        <h2>We are all in for the enviroment</h2>
        <p>
          TasteNow donates $1 penny for every purchase made from the app to an
          organization that takes care of our enviromet. We belive that with
          everyone´s help, we can make a better world.{" "}
        </p>
      </div>
    </>
  );
};

export default Environment;

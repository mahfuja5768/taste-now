import envImg from "../../../assets/images/env.png";
const Environment = () => {
  return (
    <div className="team-section ">
      <div className="team-content environment-content">
        <div>
          <img src={envImg} alt="teamWork" />
        </div>
        <div>
          <h2>
            We are all in for the <span className="span-text">enviroment</span>
          </h2>
          <p>
            TasteNow donates $1 penny for every purchase made from the app to an
            organization that takes care of our enviromet. We belive that with
            everyone´s help, we can make a better world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Environment;

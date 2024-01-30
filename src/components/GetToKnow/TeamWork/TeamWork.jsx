import teamWork from "../../../assets/images/teamWork.png";

const TeamWork = () => {
  return (
    <div className="team-section">
      <h1>
        Get to know <span className="span-text">us</span>
      </h1>
      <div className="team-content">
        <div>
          <img src={teamWork} alt="teamWork" />
        </div>
        <div>
          <h2>
            <span className="span-text">Teamwork</span> is the key to our
            success
          </h2>
          <p>
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;

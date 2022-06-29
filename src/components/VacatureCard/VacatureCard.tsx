import "./VacatureCard.scss";

type vacatureCardProps = {
  vacatureData: any;
};

const VacatureCard = ({ vacatureData }: vacatureCardProps) => {
  return (
    <div className="vacature-card">
      <div className="card-img">
        <img src="https://via.placeholder.com/100" alt="card-img" />
      </div>
      <div className="card-data">
        <div className="title">
          <h3>{vacatureData.title}</h3>
        </div>
        <div className="locatie">
          <p>{vacatureData.location}</p>
        </div>
        <div className="description">
          <p>{vacatureData.description}</p>
        </div>
      </div>
      <div className="card-btn">
        <button>Lees meer</button>
      </div>
    </div>
  );
};

export default VacatureCard;

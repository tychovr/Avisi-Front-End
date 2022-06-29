import VacatureCard from "../VacatureCard/VacatureCard";
import "./VacatureList.scss";

type vacatureListProps = {
  vacatureData: any;
};

const VacatureList = ({ vacatureData }: vacatureListProps) => {
  return (
    <div className="vacature-list">
      {vacatureData.map((vacature: any) => {
        return <VacatureCard vacatureData={vacature} key={vacature.id} />;
      })}
    </div>
  );
};

export default VacatureList;

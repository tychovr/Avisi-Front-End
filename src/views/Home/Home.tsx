import { useEffect, useState } from "react";
import APIServices from "../../Services/APIServices";
import VacatureList from "../../components/VacatureList/VacatureList";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Home.scss";

const Home = () => {
  const [vacatureData, setVacatureData] = useState([]);

  const getVacatureData = async () => {
    await APIServices.GetTopVacancies(6).then((res) => {
      console.log(res);
      setVacatureData(res.data.map((res: any) => ({ ...res, id: res.id })));
    });
  };

  useEffect(() => {
    getVacatureData();
  }, []);

  return (
    <div className="home-container">
      <div className="background">
        <Searchbar />
      </div>
      <div className="list-container">
        <VacatureList vacatureData={vacatureData} />
      </div>
      <div className="all-vacancies-btn">
        <button>Alle Vacatures Bekijken</button>
      </div>
    </div>
  );
};

export default Home;

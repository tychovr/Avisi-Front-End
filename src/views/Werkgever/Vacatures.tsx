import "./Vacatures.scss";
import Vacature from "./Vacature";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import SideBar from "./SideBar";


const Vacatures = () => {
  
    return <div className="vacatures">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="bg-image"></div>

      <div className="bg-text">
        <div>
          <form>
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit" className="search-container-button"><i className="fa fa-search"></i></button>
          <button className="btn">Filter</button>
          <button className="btn">Search</button>
          </form>
        </div>
      </div>

      <SideBar></SideBar>

      <h1 className="title">Mijn Vacatures</h1>

      <br />

      <div className="vacatures-container">
      <Vacature Baan="Verpleegkundige" Locatie="Radboud UMC"Stad="Nijmegen"></Vacature>
      <Vacature Baan="Doktersassistent" Locatie="CWZ"Stad="Amsterdam"></Vacature>
      <Vacature Baan="Operatieassistent" Locatie="Hartkliniek"Stad="Rotterdam"></Vacature>
      </div>
    </div>;
  };
    
    export default Vacatures;
import Searchbar from "./Components/Searchbar/Searchbar";
import VacancyList from "./Components/VacanciesList/VacanciesList";
import VacancyOverview from "./Components/VacancyOverview/VacancyOverview";


const VacancySearch = () => {

   //TODO:
   // - Make components
   // - Link Components
   // - Functionality
   // + Styling


   return (
      <div className="VacancySearch">
         <div className="search">
            <Searchbar />
         </div>
         <div className="result">
            <div className="list">
               <VacancyList />
            </div>
            <div className="overview">
               <VacancyOverview />
            </div>   
         </div>
      </div>
   );
}


export default VacancySearch;
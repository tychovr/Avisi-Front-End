import VacancySingle from "./VacancySingle/VacancySingle";

const VacancyList = () => {

   //TODO:
   // - Import vacancy search array from searchbar
   // - export and map to vacancySingle

   return (
      <div className="VacancyList">
         <VacancySingle />
         <VacancySingle />
         <VacancySingle />
      </div>
   )
}

export default VacancyList;
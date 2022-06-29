import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="functie" />
      <input type="text" placeholder="regio" />
      <button type="submit" className="search-btn">
        zoeken
      </button>
    </div>
  );
};

export default Searchbar;

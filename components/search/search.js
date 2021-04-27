import classes from "./search.module.scss";
import SearchIcon from "../../icons/search";

function Search() {
  return (
    <form className={classes.search}>
      <div className={classes.control}>
        <SearchIcon />
        <input type="search" placeholder="search for destination..." />
      </div>
    </form>
  );
}

export default Search;

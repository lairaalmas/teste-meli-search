import { Form } from "react-router-dom";

import "../../css/SearchBar.min.css";

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <Form method="get" action="/items" className="SearchBar__form">
        <input
          className="SearchBar__form__field"
          type="search"
          name="search"
          placeholder="Nunca dejes de buscar"
          aria-label="Buscar produtos"
        />
        <button className="SearchBar__form__button">
          <span className="material-symbols-outlined">search</span>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;

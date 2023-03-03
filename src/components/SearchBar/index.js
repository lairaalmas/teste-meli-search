import { Form } from "react-router-dom";

import "../../css/SearchBar.min.css";

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <Form className="SearchBar__form" method="get">
        <input
          className="SearchBar__form__field"
          type="search"
          placeholder="Nunca dejes de buscar"
        />
        <button
          className="SearchBar__form__button"
          type="submit"
          title="Buscar"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;

import { Form } from "react-router-dom";

import "../../css/SearchBar.min.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <Form method="get" action="/items">
        <label className="visually-hidden">Buscar produtos</label>
        <input
          type="search"
          name="search"
          placeholder="Nunca dejes de buscar"
        />
        <button aria-label="Buscar">
          <span className="material-symbols-outlined" aria-hidden="true">
            search
          </span>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;

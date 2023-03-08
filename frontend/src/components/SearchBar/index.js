import { Form, useNavigation } from "react-router-dom";

import "../../css/SearchBar.min.css";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <div className="SearchBar">
      <Form method="get" action="/items">
        <label className="visually-hidden">Buscar produtos</label>
        <input
          type="search"
          name="search"
          placeholder="Nunca dejes de buscar"
          disabled={navigation.state === "loading"}
        />
        <button aria-label="Buscar" disabled={navigation.state === "loading"}>
          <span className="material-symbols-outlined" aria-hidden="true">
            search
          </span>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;

import { useEffect } from "react";
import { Form } from "react-router-dom";

import "../../css/SearchBar.min.css";

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <Form method="get" action="/items" className="SearchBar__form">
        <input
          className="SearchBar__form__field"
          aria-label="Buscar produtos"
          type="search"
          name="search"
          placeholder="Nunca dejes de buscar"
        />
        <button
          className="SearchBar__form__button"
          type="submit"
          // title="Buscar"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search");

  console.log(query);

  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=" + query
  );

  if (!response.ok) {
    console.log("Could not fetch searched products.");
  } else {
    const data = await response.json();
    const dataCategories = data.filters[0].values[0].path_from_root.map(
      (category) => category.name
    );
    const dataItems = data.results.slice(0, 4);

    const treatedData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      categories: dataCategories,
      items: dataItems.map((item) => {
        let [amount, decimals] = ("" + item.price).split(".");
        amount = +amount;
        if (decimals) {
          decimals = decimals.length === 1 ? decimals + "0" : decimals;
        } else {
          decimals = "00";
        }

        return {
          id: item.id || "Dummy id",
          title: item.title || "Dummy title",
          price: {
            currency: item.currency_id || "Dummy currency",
            amount: amount,
            decimals: decimals, // number or "number" ?
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      }),
    };

    console.log(treatedData);

    return treatedData;
  }
};

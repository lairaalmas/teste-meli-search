import { Link } from "react-router-dom";

import "../../../css/SearchResult.min.css";

export const SearchResultItem = ({ item, categories }) => {
  const path = item.id;

  const amount = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: item.price.currency,
  }).format(item.price.amount);

  return (
    <li className="SearchResult__list__item">
      <div className="SearchResult__list__item__picture">
        <Link to={path} state={categories}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className="SearchResult__list__item__information">
        <Link
          to={path}
          state={categories}
          className="SearchResult__list__item__information__price"
        >
          {amount.split(",")[0]}

          {item.free_shipping && (
            <span className="material-symbols-outlined" title="Envio gratis">
              local_shipping
            </span>
          )}
        </Link>
        <p>
          <Link to={path} state={categories}>
            {item.title}
          </Link>
        </p>
      </div>
      <div className="SearchResult__list__item__location">
        <small>{item.state}</small>
      </div>
    </li>
  );
};

export default SearchResultItem;

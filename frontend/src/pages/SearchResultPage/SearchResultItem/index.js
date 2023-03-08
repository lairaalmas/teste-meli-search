import { Link } from "react-router-dom";

import "../../../css/SearchResult.min.css";

export const SearchResultItem = ({ item }) => {
  const path = item.id;

  const amount = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: item.price.currency,
  }).format(item.price.amount);

  return (
    <li className="SearchResult__list__item">
      <div className="SearchResult__list__item__picture">
        <Link to={path}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className="SearchResult__list__item__information">
        <Link
          to={path}
          className="SearchResult__list__item__information__price"
        >
          {amount.split(",")[0]}

          {item.free_shipping && (
            <span class="material-symbols-outlined" title="Envio gratis">
              local_shipping
            </span>
          )}
        </Link>
        <p>
          <Link to={path}>{item.title}</Link>
        </p>
      </div>
      <div className="SearchResult__list__item__location">
        <small>{item.state}</small>
      </div>
    </li>
  );
};

export default SearchResultItem;

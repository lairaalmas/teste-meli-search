import { Link } from "react-router-dom";

import "../../../css/SearchResult.min.css";

export const SearchResultItem = ({ item }) => {
  const path = item.id;

  let amount = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: item.price.currency,
  }).format(item.price.amount);
  amount = amount.split(",")[0];

  return (
    <li className="SearchResult__list__item">
      <div className="SearchResult__list__item__img">
        <Link to={path}>
          <img src={item.picture} alt={""} />
        </Link>
      </div>
      <div className="SearchResult__list__item__info">
        <Link to={path} className="SearchResult__list__item__info__price">
          {amount}
        </Link>
        <h3>
          <Link to={path}>{item.title}</Link>
        </h3>
      </div>
      <div className="SearchResult__list__item__place">
        <small>{item.city}</small>
      </div>
    </li>
  );
};

export default SearchResultItem;

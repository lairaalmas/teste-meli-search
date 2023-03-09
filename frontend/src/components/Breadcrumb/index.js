import { useLoaderData } from "react-router-dom";

import "../../css/Breadcrumb.min.css";

const Breadcrumb = ({ links }) => {
  const data = useLoaderData();

  let categories = [];

  if (data?.categories?.length) {
    categories = data.categories;
  }

  if (links) {
    categories = links;
  }

  return (
    categories.length !== 0 && (
      <nav className="Breadcrumb">
        <ul className="Breadcrumb__list">
          {categories.map((category, index) => (
            <li className="Breadcrumb__list__item" key={"breadcrumb-" + index}>
              {category}
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Breadcrumb;

import { useLoaderData } from "react-router-dom";

import "../../css/Breadcrumb.min.css";

const Breadcrumb = () => {
  const data = useLoaderData();
  let categories = [];

  if (data?.categories?.length) {
    categories = data.categories;
  }

  return (
    <div className="Breadcrumb">
      <ul className="Breadcrumb__list">
        {categories.length !== 0 ? (
          categories.map((category, index) => (
            <li className="Breadcrumb__list__item" key={"breadcrumb" + index}>
              {category}
            </li>
          ))
        ) : (
          <li className="Breadcrumb__list">Sin categoría específica</li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;

import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import SearchResultItem from "./SearchResultItem";
import Breadcrumb from "../../components/Breadcrumb";

import "../../css/SearchResult.min.css";

const SearchResultPage = () => {
  const data = useLoaderData();

  return (
    <>
      <Breadcrumb />
      <Card>
        {data.items && data.items.length === 0 ? (
          <div className="SearchResult__list">
            <p>No items found</p>
          </div>
        ) : (
          <ul className="SearchResult__list">
            {data.items.map((item) => {
              return <SearchResultItem item={item} key={item.id} />;
            })}
          </ul>
        )}
      </Card>
    </>
  );
};

export default SearchResultPage;

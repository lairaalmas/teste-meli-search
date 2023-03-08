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
      <Card className="SearchResult">
        {data?.items?.length ? (
          <ul className="SearchResult__list">
            {data.items.map((item) => {
              return <SearchResultItem item={item} key={item.id} />;
            })}
          </ul>
        ) : (
          <p>No se encontraron productos</p>
        )}
      </Card>
    </>
  );
};

export default SearchResultPage;

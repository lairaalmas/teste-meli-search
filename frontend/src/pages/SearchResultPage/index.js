import { useLoaderData, useNavigation } from "react-router-dom";
import Card from "../../components/Card";
import SearchResultItem from "./SearchResultItem";
import Breadcrumb from "../../components/Breadcrumb";

import "../../css/SearchResult.min.css";

const SearchResultPage = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  let content = data?.items?.length ? (
    <ul className="SearchResult__list">
      {data.items.map((item) => {
        return <SearchResultItem item={item} key={item.id} />;
      })}
    </ul>
  ) : (
    <p>No se encontraron productos</p>
  );

  if (navigation.state === "loading") content = <p>Cargando...</p>;

  return (
    <>
      <Breadcrumb />
      <Card className="SearchResult">{content}</Card>
    </>
  );
};

export default SearchResultPage;

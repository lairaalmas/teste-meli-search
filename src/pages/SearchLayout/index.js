import { Outlet } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const SearchLayout = () => {
  return (
    <>
      <Breadcrumb />
      <Outlet />
    </>
  );
};

export default SearchLayout;

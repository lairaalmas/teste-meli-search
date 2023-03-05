import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const RootLayout = () => {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

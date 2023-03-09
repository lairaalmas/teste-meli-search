import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import RootLayout from "../../pages/RootLayout";
import SearchResultPage from "../../pages/SearchResultPage";

const getRouter = () => {
  const routes = [
    {
      path: "/",
      element: <RootLayout />,
    },
    {
      path: "/items",
      element: <SearchResultPage />,
      loader: () => [],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  return router;
};

describe("SearchBar component", () => {
  it("renders", async () => {
    const router = getRouter();
    render(<RouterProvider router={router} />);

    const inputField = await waitFor(() => screen.findByRole("searchbox"));
    expect(inputField).toBeInTheDocument();
  });

  it("redirects to SearchResultPage after executing search", async () => {
    const user = userEvent.setup();
    const router = getRouter();
    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toEqual("/");

    const inputField = await waitFor(() => screen.findByRole("searchbox"));
    await waitFor(async () => user.type(inputField, "myQuery"));

    const button = await screen.findByRole("button");
    await waitFor(async () => user.click(button));

    expect(router.state.location.search).toEqual("?search=myQuery");
  });

  it("redirects to SearchResultPage after executing empty search", async () => {
    const user = userEvent.setup();
    const router = getRouter();
    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toEqual("/");

    const button = await screen.findByRole("button");
    await waitFor(async () => user.click(button));

    expect(router.state.location.search).toEqual("?search=");
  });
});

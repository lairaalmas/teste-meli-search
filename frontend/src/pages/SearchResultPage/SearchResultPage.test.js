import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import SearchLayout from "../SearchLayout";
import ErrorPage from "../ErrorPage";
import ProductDetailPage from ".";
import SearchResultPage from "../SearchResultPage";

const getRouter = (data) => {
  const routes = [
    {
      path: "/items",
      element: <SearchLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <SearchResultPage />, loader: () => data },
        {
          path: ":id",
          element: <ProductDetailPage />,
          loader: () => {},
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/items?search=PRODUCT"],
  });

  return router;
};

describe("SearchResult Page", () => {
  it("renders page if data object is set", async () => {
    const DUMMY_DATA = {
      author: {
        name: "",
        lastname: "",
      },
      categories: ["", ""],
      items: [
        {
          id: "id1",
          title: "",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
        {
          id: "id2",
          title: "Product Name",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
      ],
    };
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const ProductName = await waitFor(() => screen.findByText("Product Name"));
    expect(ProductName).toBeInTheDocument();
  });

  it("renders feedback msg if data object is empty", async () => {
    const DUMMY_DATA = [];
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText("No se encontraron productos");
    expect(feedback).toBeInTheDocument();
  });

  it("renders feedback msg if data object is null", async () => {
    const DUMMY_DATA = null;
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText("No se encontraron productos");
    expect(feedback).toBeInTheDocument();
  });

  it("renders error page if data object is undefined", async () => {
    const DUMMY_DATA = undefined;
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const redirectText = await screen.findByText("Go back to", {
      exact: false,
    });
    expect(redirectText).toBeInTheDocument();
  });

  it("renders breadcrumb if categories are set", async () => {
    const DUMMY_DATA = {
      author: {
        name: "",
        lastname: "",
      },
      categories: ["Category 1", "Category 2"],
      items: [
        {
          id: "id",
          title: "",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
      ],
    };
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const breadcrumb = await waitFor(() => screen.findByRole("navigation"));
    const category = screen.getByText("Category 2");

    expect(breadcrumb).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  it("redirects to ProductDetailsPage after clicking a link", async () => {
    const user = userEvent.setup();

    const DUMMY_DATA = {
      author: {
        name: "",
        lastname: "",
      },
      categories: [],
      items: [
        {
          id: "ML123",
          title: "Product Name",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
      ],
    };
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    expect(router.state.location.pathname).toEqual("/items");
    expect(router.state.location.search).toEqual("?search=PRODUCT");

    const product = await screen.findByText("Product Name");
    await waitFor(() => user.click(product));

    expect(router.state.location.pathname).toEqual("/items/ML123");
  });
});

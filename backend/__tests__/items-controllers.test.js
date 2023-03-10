const axios = require("axios");
const { getMockRes } = require("@jest-mock/express");

const {
  getSearchedItems,
  getProductDetails,
} = require("../items/items.controllers");

jest.mock("axios");
axios.get = jest.fn();

jest.mock("../items/items.services", () => {
  return {
    requestData: () => {
      return Promise.resolve({ items: [] });
    },
    searchItemsService: () => {
      return { items: [] };
    },
    productDetailsService: () => {
      return { items: [] };
    },
    productDescriptionService: () => {
      return { items: [] };
    },
  };
});

describe("Get Searched Items function", () => {
  it("to return searched items", async () => {
    // given
    const req = { query: { q: "query" } };
    const { res, next } = getMockRes();

    // when
    const data = await getSearchedItems(req, res, next);

    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        items: [],
      })
    );
  });
});

describe("Get Product Details function", () => {
  it("to return product details", async () => {
    // given
    const req = { params: { id: "id" } };
    const { res, next } = getMockRes();

    // when
    const data = await getProductDetails(req, res, next);

    // then
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        items: [],
      })
    );
  });
});

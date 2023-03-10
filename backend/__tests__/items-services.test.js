const axios = require("axios");

jest.mock("axios");
axios.get = jest.fn();

const {
  requestData,
  searchItemsService,
  productDetailsService,
  productDescriptionService,
} = require("../items/items.services");

describe("Request Data Function", () => {
  it("performas 'get' request to the API", async () => {
    // given
    const path = "/path";
    const response = { data: { items: [] } };
    axios.get.mockResolvedValueOnce(response);

    // when
    const data = await requestData(path);

    // then
    expect(axios.get).toHaveBeenCalledWith("https://api.mercadolibre.com/path");
    expect(data).toEqual(response.data);
  });
});

describe("Search Items Service Function", () => {
  it("returns an object with desirable fields", () => {
    // given
    const untreatedData = {
      results: [
        {
          id: "id",
          title: "title",
          currency_id: "currency",
          price: 10.9,
          thumbnail: "url",
          attributes: [{ id: "ITEM_CONDITION", value_name: "condition" }],
          shipping: { free_shipping: false },
          address: { state_name: "state" },
        },
      ],
      filters: [{ values: [{ path_from_root: [{ name: "cat1" }] }] }],
    };

    const treatedData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      categories: ["cat1"],
      items: [
        {
          id: "id",
          title: "title",
          price: {
            currency: "currency",
            amount: 10,
            decimals: "90",
          },
          picture: "url",
          condition: "condition",
          free_shipping: false,
          state: "state",
        },
      ],
    };

    // when
    const data = searchItemsService(untreatedData);

    expect(data).toEqual(treatedData);
  });
});

describe("Product Details Service Function", () => {
  it("returns an object with desirable fields", () => {
    // given
    const untreatedData = {
      id: "id",
      title: "title",
      currency_id: "currency",
      price: 10.9,
      pictures: [{ url: "url" }],
      attributes: [{ id: "ITEM_CONDITION", value_name: "condition" }],
      shipping: { free_shipping: false },
      address: { state_name: "state" },
      sold_quantity: "sold",
    };

    const treatedData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      item: {
        id: "id",
        title: "title",
        price: {
          currency: "currency",
          amount: 10,
          decimals: "90",
        },
        picture: "url",
        condition: "condition",
        free_shipping: false,
        sold_quantity: "sold",
        description: "descripción no disponible",
      },
    };

    // when
    const data = productDetailsService(untreatedData);

    expect(data).toEqual(treatedData);
  });
});

describe("Product Description Service Function", () => {
  it("returns an object with correct description when raw description in valid", () => {
    // given
    const untreatedDescription = { plain_text: "description" };
    const incompleteData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      item: {
        id: "id",
        title: "title",
        price: {
          currency: "currency",
          amount: 10,
          decimals: "90",
        },
        picture: "url",
        condition: "condition",
        free_shipping: false,
        sold_quantity: "sold",
        description: "descripción no disponible",
      },
    };
    const treatedData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      item: {
        id: "id",
        title: "title",
        price: {
          currency: "currency",
          amount: 10,
          decimals: "90",
        },
        picture: "url",
        condition: "condition",
        free_shipping: false,
        sold_quantity: "sold",
        description: "description",
      },
    };

    // when
    const data = productDescriptionService(
      incompleteData,
      untreatedDescription
    );

    expect(data).toEqual(treatedData);
  });

  it("returns an object with default description when raw description in invalid", () => {
    // given
    const untreatedDescription = {};
    const incompleteData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      item: {
        id: "id",
        title: "title",
        price: {
          currency: "currency",
          amount: 10,
          decimals: "90",
        },
        picture: "url",
        condition: "condition",
        free_shipping: false,
        sold_quantity: "sold",
        description: "descripción no disponible",
      },
    };
    const treatedData = {
      author: {
        name: "Dummy name",
        lastname: "Dummy lastname",
      },
      item: {
        id: "id",
        title: "title",
        price: {
          currency: "currency",
          amount: 10,
          decimals: "90",
        },
        picture: "url",
        condition: "condition",
        free_shipping: false,
        sold_quantity: "sold",
        description: "descripción no disponible",
      },
    };

    // when
    const data = productDescriptionService(
      incompleteData,
      untreatedDescription
    );

    expect(data).toEqual(treatedData);
  });
});

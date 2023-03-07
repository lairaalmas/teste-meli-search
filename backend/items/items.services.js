const axios = require("axios");
const axiosInstance = axios.create({ baseURL: "https://api.mercadolibre.com" });

async function requestData(url) {
  const response = await axiosInstance.get(url);
  return response.data;
}

function searchItemsService(data) {
  let treatedData = {
    author: {
      name: "Dummy name",
      lastname: "Dummy lastname",
    },
    categories: [],
    items: [],
  };

  if (data) {
    if (data?.results?.length !== 0) {
      treatedData.items = data.results.map((item) => {
        const [amount, decimals] = getFormattedPrice(item.price);

        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: amount,
            decimals: decimals,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      });
    }

    if (data?.filters?.[0]?.values[0]?.path_from_root) {
      treatedData.categories = data.filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    }
  }

  return treatedData;
}

function productDetailsService(data) {
  let treatedData = {
    author: {
      name: "Dummy name",
      lastname: "Dummy lastname",
    },
    item: [],
  };

  if (data?.id) {
    const [amount, decimals] = getFormattedPrice(data.price);

    treatedData.item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: amount,
        decimals: decimals,
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: "descripción no disponible",
    };
  }

  return treatedData;
}

function productDescriptionService(details, description) {
  let updatedDetails = details;

  if (description?.plain_text)
    updatedDetails.item.description = description.plain_text;

  return updatedDetails;
}

function getFormattedPrice(price) {
  let [amount, decimals] = ("" + price).split(".");
  return [
    +amount,
    decimals ? decimals + "0".repeat(2 - decimals.length) : "00",
  ];
}

module.exports = {
  requestData,
  searchItemsService,
  productDetailsService,
  productDescriptionService,
};

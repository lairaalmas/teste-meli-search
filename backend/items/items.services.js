const axios = require("axios");

async function requestData(path) {
  const response = await axios.get("https://api.mercadolibre.com" + path);
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
        const condition = item.attributes.filter(
          (attribute) => attribute.id === "ITEM_CONDITION"
        );
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: amount,
            decimals: decimals,
          },
          picture: item.thumbnail,
          condition: condition[0].value_name,
          free_shipping: item.shipping.free_shipping,
          state: item.address.state_name,
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
    const condition = data.attributes.filter(
      (attribute) => attribute.id === "ITEM_CONDITION"
    );
    treatedData.item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: amount,
        decimals: decimals,
      },
      picture: data.pictures[0].url,
      condition: condition[0].value_name,
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
  getFormattedPrice,
};

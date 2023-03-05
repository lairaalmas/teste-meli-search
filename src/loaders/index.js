import { json } from "react-router-dom";

export const loadSearchItems = async ({ request }) => {
  // alert("search");

  const url = new URL(request.url);
  const searchTherm = url.searchParams.get("search");

  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=" + searchTherm
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch searched products." });
  } else {
    const data = await response.json();

    if (data && data.results) {
      let treatedData = {
        author: {
          name: "Dummy name",
          lastname: "Dummy lastname",
        },
        categories: [],
        items: [],
      };

      if (data.results.length === 0) return treatedData;

      treatedData.categories = data.filters[0].values[0].path_from_root.map(
        (category) => category.name
      );

      treatedData.items = data.results.slice(0, 4).map((item) => {
        let [amount, decimals] = ("" + item.price).split(".");

        amount = +amount;

        if (decimals) {
          decimals = decimals.length === 1 ? decimals + "0" : decimals;
        } else decimals = "00";

        return {
          id: item.id || "Dummy id",
          title: item.title || "Dummy title",
          price: {
            currency: item.currency_id || "Dummy currency",
            amount: amount,
            decimals: decimals, // number or "number" ?
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      });

      return treatedData;
    } else {
      throw json({ message: "Could not use fetched data." });
    }
  }
};

export const loadProductDetails = async ({ params }) => {
  // alert("product detail");

  const id = params.id;
  const response = await fetch("https://api.mercadolibre.com/items/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch product details." });
  } else {
    const data = await response.json();

    if (data && data.id) {
      let [amount, decimals] = ("" + data.price).split(".");
      amount = +amount;
      if (decimals) {
        decimals = decimals.length === 1 ? decimals + "0" : decimals;
      } else {
        decimals = "00";
      }

      const treatedData = {
        author: {
          name: "Dummy name",
          lastname: "Dummy lastname",
        },
        item: {
          id: data.id || "Dummy id",
          title: data.title || "Dummy title",
          price: {
            currency: data.currency_id || "Dummy currency",
            amount: amount,
            decimals: decimals, // number or "number" ?
          },
          picture: data.pictures[0].url,
          condition: data.condition,
          free_shipping: data.shipping.free_shipping,
          sold_quantity: data.sold_quantity,
          description:
            "Dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description",
        },
      };

      return treatedData;
    } else {
      throw json({ message: "Could not use fetched data." });
    }
  }
};

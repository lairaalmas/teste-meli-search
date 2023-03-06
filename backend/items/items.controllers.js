const axios = require("axios");
const axiosInstance = axios.create({ baseURL: "https://api.mercadolibre.com" });

const {
  searchItemsService,
  productDetailsService,
  requestData,
} = require("./items.services");

async function getSearchedItems(req, res, next) {
  try {
    const query = req.query.q;
    const url = `/sites/MLA/search?q=${query}&limit=4`;

    const data = await requestData(url);

    res.status(200).json({ items: searchItemsService(data) });
  } catch (error) {
    //Could not fetch searched products.
    next(error);
  }
}

async function getProductDetails(req, res, next) {
  try {
    const id = req.params.id;

    const url = `/items/${id}`;
    const data = await requestData(url);

    res.status(200).json({ item: productDetailsService(data) });
  } catch (error) {
    //Could not fetch product details
    next(error);
  }
}

module.exports = {
  getSearchedItems,
  getProductDetails,
};

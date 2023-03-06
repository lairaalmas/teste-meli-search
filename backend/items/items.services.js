const axios = require("axios");
const axiosInstance = axios.create({ baseURL: "https://api.mercadolibre.com" });

async function requestData(url) {
  const response = await axiosInstance.get(url);
  return response.data;
}

function searchItemsService(data) {
  let treatedData = {};

  return treatedData;
}

function productDetailsService(data) {
  let treatedData = {};

  return treatedData;
}

module.exports = {
  requestData,
  searchItemsService,
  productDetailsService,
};

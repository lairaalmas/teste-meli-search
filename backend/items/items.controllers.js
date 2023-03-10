const {
  requestData,
  searchItemsService,
  productDetailsService,
  productDescriptionService,
} = require("./items.services");

async function getSearchedItems(req, res, next) {
  try {
    const query = req.query.q;
    const url = `/sites/MLA/search?q=${query}&limit=4`;

    const data = await requestData(url);

    res.status(200).json(searchItemsService(data));
  } catch (error) {
    const err = new Error("Could not fetch searched products");
    err.status = error.response.status;
    next(err);
  }
}

async function getProductDetails(req, res, next) {
  try {
    const id = req.params.id;

    const detailsURL = `/items/${id}`;
    const descriptionURL = `/items/${id}/description`;

    const [details, description] = await Promise.allSettled([
      requestData(detailsURL),
      requestData(descriptionURL),
    ]);

    if (details.status === "rejected") {
      const err = new Error("Could not fetch product details");
      err.status = details.reason.response.status;

      throw err;
    }

    let data = productDetailsService(details.value);
    data = productDescriptionService(data, description.value);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getSearchedItems,
  getProductDetails,
};

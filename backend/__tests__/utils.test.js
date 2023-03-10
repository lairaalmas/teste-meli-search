const { getFormattedPrice } = require("../items/items.services");

describe("Get Formatted Price function", () => {
  it("should return an array with ...", () => {
    expect(getFormattedPrice(15.99)[0]).toBe(15);
    expect(getFormattedPrice(15.99)[1]).toBe("99");
  });

  it("works when there is no decimal part", () => {
    expect(getFormattedPrice(15)[0]).toBe(15);
    expect(getFormattedPrice(15)[1]).toBe("00");
  });

  it("works when there is only one decimal place", () => {
    expect(getFormattedPrice(15.9)[0]).toBe(15);
    expect(getFormattedPrice(15.9)[1]).toBe("90");
  });
});

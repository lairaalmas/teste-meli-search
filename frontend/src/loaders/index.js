export const loadSearchItems = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get("search");

    const response = await fetch("http://localhost:8080/api/items?q=" + query);
    const data = await response.json();

    return data.items;
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const loadProductDetails = async ({ params }) => {
  try {
    const id = params.id;

    const response = await fetch("http://localhost:8080/api/items/" + id);
    const data = await response.json();

    return data.item;
  } catch (error) {
    console.log("Error: " + error);
  }
};

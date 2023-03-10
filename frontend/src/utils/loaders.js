import { json } from "react-router-dom";

export const loadSearchItems = async ({ request }) => {
  const baseUrl = new URL(request.url);
  const query = baseUrl.searchParams.get("search");

  const response = await fetch(`http://localhost:8080/api/items?q=${query}`);
  const data = await response.json();

  if (!response.ok) throw json(data);

  return data;
};

export const loadProductDetails = async ({ params }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/api/items/${id}`);
  const data = await response.json();

  if (!response.ok) throw json(data);

  return data;
};

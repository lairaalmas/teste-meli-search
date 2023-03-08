import { useLoaderData } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

import Card from "../../components/Card";

import "../../css/ProductDetail.min.css";

const ProductDetailPage = () => {
  const data = useLoaderData();

  let content;

  if (!data || !data.item) {
    content = <p>No se encontraron detalles del productos</p>;
  } else {
    const item = data.item;

    const amount = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: item.price.currency,
    }).format(item.price.amount);

    content = (
      <>
        <div className="ProductDetail__content">
          <div className="ProductDetail__content__picture">
            <img src={item.picture} alt={item.picture} />
          </div>

          <div className="ProductDetail__content__description">
            <h2>Descripción del producto</h2>

            <p>{item.description}</p>
          </div>
        </div>

        <div className="ProductDetail__information">
          <div className="ProductDetail__information__extra">
            <small>
              {item.condition} - {item.sold_quantity} vendidos
            </small>
          </div>

          <h1 className="ProductDetail__information__title">{item.title}</h1>

          <div className="ProductDetail__information__price">
            <strong>
              <span>{amount.split(",")[0]}</span>
              <span>{item.price.decimals}</span>
            </strong>
          </div>

          <button type="button">Comprar</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb />
      <Card className="ProductDetail">{content}</Card>
    </>
  );
};

export default ProductDetailPage;

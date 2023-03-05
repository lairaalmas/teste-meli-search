import { useLoaderData } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

import Card from "../../components/Card";

import "../../css/ProductDetail.min.css";

const ProductDetailPage = () => {
  const data = useLoaderData();
  let item, amount;

  if (data && data.item) {
    item = data.item;

    amount = Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: item.price.currency,
    }).format(item.price.amount);
    amount = amount.split(",")[0];
  } else {
    return (
      <Card className="ProductDetail">
        <h2>Erro</h2>
      </Card>
    );
  }

  return (
    <>
      <Breadcrumb categories={[]} />
      <Card className="ProductDetail">
        <div className="ProductDetail__main">
          <div className="ProductDetail__main__img">
            <img src={item.picture} alt={item.picture} />
          </div>
          <div className="ProductDetail__main__info">
            <p className="ProductDetail__main__info__small">
              {item.condition} - {item.sold_quantity} vendidos
            </p>
            <h2 className="ProductDetail__main__info__title">{item.title}</h2>
            <div className="ProductDetail__main__info__price">
              <span>{amount}</span>
              <span>{item.price.decimals}</span>
            </div>
            <button>Comprar</button>
          </div>
        </div>
        <div className="ProductDetail__description">
          <h3 className="ProductDetail__description__title">
            Descripción del producto
          </h3>
          <p className="ProductDetail__description__content">
            {item.description}
          </p>
        </div>
      </Card>
    </>
  );
};

export default ProductDetailPage;

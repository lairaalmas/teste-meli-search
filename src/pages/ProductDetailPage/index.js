import { useLoaderData } from "react-router-dom";

import Card from "../../components/Card";

import "../../css/ProductDetail.min.css";

const ProductDetailPage = () => {
  const data = useLoaderData();
  let item;

  if (data && data.item) item = data.item;
  else {
    return (
      <Card className="ProductDetail">
        <h2>Erro</h2>
      </Card>
    );
  }

  return (
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
            <span>$&nbsp;{item.price.amount}</span>
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
  );
};

export default ProductDetailPage;

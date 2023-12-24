import { Link } from "react-router-dom"
import { Button } from "../../../shared/button/button"
import { ProductCardProps } from "./types"

export const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  productName,
  paymentLink,
  productDesc,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img className="product-card__image" src={imgSrc} alt="" />
      </div>
      <div className="product-card__text">
        <div className="product-card__name">{productName}</div>
        <div className="product-card__desc">
          {productDesc ?? "Sown between March to May"}
        </div>
      </div>
      <Link to={paymentLink} target="__blank">
        <Button className="product-card__btn">Buy Now</Button>
      </Link>
    </div>
  )
}

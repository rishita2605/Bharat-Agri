import { Button } from "../../../shared/button/button"

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <div className="produc-card__image"></div>
      </div>
      <div className="product-card__name">Cotton</div>
      <div className="product-card__desc">Sown between March to May</div>
      <Button className="product-card__btn">Buy Now</Button>
    </div>
  )
}

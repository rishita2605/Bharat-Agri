import { Button } from "../../../shared/button/button"

type ProductCardProps = {
  imgSrc: string
  link: string
  productName: string
  productDesc: string
}

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          className="product-card__image"
          src="https://compress-pop-images.s3.ap-south-1.amazonaws.com/static/Sugarcane1.webp"
        />
      </div>
      <div className="product-card__text">
        <div className="product-card__name">Cotton</div>
        <div className="product-card__desc">Sown between March to May</div>
      </div>
      <Button className="product-card__btn">Buy Now</Button>
    </div>
  )
}

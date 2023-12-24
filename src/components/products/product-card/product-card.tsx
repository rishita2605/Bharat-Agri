import { Link } from "react-router-dom"
import { Button } from "../../../shared/button/button"
import { ProductCardProps } from "./types"
import { useState } from "react"
import { ProductModal } from "../product-modal"

export const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  productName,
  paymentLink,
  productDesc,
}) => {
  // States.
  const [show, setShow] = useState(false)

  // Handlers.
  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  // Renders.
  return (
    <div className="product-card">
      <div className="product-card__image-container" onClick={handleShow}>
        <ProductModal
          show={show}
          handleClose={handleClose}
          image={imgSrc}
          heading={productName}
        />
        {/* <div className="product-card__image__hover"></div> */}
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

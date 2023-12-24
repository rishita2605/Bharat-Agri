import { ApiResponse } from "."
import { ProductCardProps } from "./product-card/types"

export const productCardInitialData: ProductCardProps = {
  id: null,
  imgSrc: "",
  imgAlt: "",
  paymentLink: "",
  productName: "",
}

export const responseMapper = (data: Array<ApiResponse>) => {
  return data.map((record: ApiResponse) => {
    let result: ProductCardProps = { ...productCardInitialData }
    const [image] = record.thumbnails

    result.imgSrc = image.image
    result.imgAlt = image.detail

    result.paymentLink = record.payment_link
    result.productName = record.crop_name
    result.id = record.id

    return result
  })
}
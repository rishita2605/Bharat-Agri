import { useEffect, useState } from "react"
import { Input } from "../../shared/input"
import { Button } from "../../shared/button/button"
import { ProductCard } from "./product-card"
import axios, { AxiosResponse } from "axios"
import { camelCase } from "lodash"
import { ProductCardProps } from "./product-card/types"

type ApiResponse = {
  id: number
  thumbnails: [
    {
      id: number
      image: string
      detail: string
    },
  ]
  crop_name: string
  index: number
  service_cost: null | number
  payment_link: string
}

const productCardInitialData: ProductCardProps = {
  id: null,
  imgSrc: "",
  imgAlt: "",
  paymentLink: "",
  productName: "",
}

const responseMapper = (data: Array<ApiResponse>) => {
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

export const Products = () => {
  // States.
  const [searchText, setSearchText] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [productData, setProductData] = useState<ProductCardProps[]>([
    productCardInitialData,
  ])

  // Constants.
  const baseUrl =
    "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(baseUrl)
      .then(
        (
          response: AxiosResponse<{
            data: ApiResponse[]
          }>,
        ) => {
          let data = response.data.data
          setProductData(responseMapper(data))
          setIsLoading(false)
        },
      )
      .catch((error) => {
        console.error({ error })
      })
  }, [])

  return (
    <div className="products">
      <div className="products__hero-section">
        <div className="products__hero-section__search">
          <div className="products__hero-section__search__header">
            All your crops in one place!
          </div>
          <div className="products__hero-section__search__input-group">
            <Input placeholder="Search for a crop." type="text" />
            <Button>Search.</Button>
          </div>
        </div>
      </div>
      <div className="products__item-section">
        {productData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

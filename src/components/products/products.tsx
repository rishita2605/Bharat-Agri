import axios, { AxiosResponse } from "axios"
import { isEmpty, isNil } from "lodash"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { Button } from "../../shared/button/button"
import { Input } from "../../shared/input"
import { responseMapper } from "./helpers"
import { ProductCard } from "./product-card"
import { ProductCardProps } from "./product-card/types"
import { ApiResponse } from "./types"

export const Products = () => {
  // States.
  const [searchText, setSearchText] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [productData, setProductData] = useState<ProductCardProps[]>()
  const [searchProduct, setSearchProduct] = useState<ProductCardProps[]>()

  // Constants.
  const baseUrl =
    "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"

  // Side Effects.
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

  useEffect(() => {
    if (isEmpty(searchText)) {
      setSearchProduct(productData)
      return
    }

    const filtered = productData?.filter(({ productName }) => {
      const name = productName.toLowerCase()
      return name.includes(searchText)
    })

    setSearchProduct(filtered)
  }, [searchText, productData])

  // Handlers.
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase())
  }

  return (
    <div className="products">
      <div className="products__hero-section">
        <div className="products__hero-section__search">
          <div className="products__hero-section__search__header">
            All your crops in one place!
          </div>
          <div className="products__hero-section__search__input-group">
            <Input
              placeholder="Search for a crop."
              type="text"
              onChange={handleSearchInput}
              value={searchText}
            />
            <Button>Search.</Button>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="products__spinner">
          <Spinner />
        </div>
      ) : (
        <div className="products__item-section">
          {isEmpty(searchProduct) || isNil(searchProduct) ? (
            <div className="products__item-section--empty">
              No products to display.
            </div>
          ) : (
            searchProduct.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )}
        </div>
      )}
    </div>
  )
}

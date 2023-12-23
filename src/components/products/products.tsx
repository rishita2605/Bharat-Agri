import { useState } from "react"
import { Input } from "../../shared/input"
import { Button } from "../../shared/button/button"

export const Products = () => {
  // States.
  const [searchText, setSearchText] = useState("")

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
    </div>
  )
}

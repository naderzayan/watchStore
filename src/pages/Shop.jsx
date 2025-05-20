import React from 'react'
import ProductsByRating from './shop/ProductsByRating'
import ProductCategories from './shop/ProductCategories'
import DataShop from './shop/DataShop'

export default function Shop() {
  return (
      <div className="mainOfShop">
          <div className='side'>
              <ProductsByRating />
              <ProductCategories />
          </div>
          <div>
              <div className="data_shop">
                  <DataShop />
                  <DataShop />
                  <DataShop />
                  <DataShop />
              </div>
              <div className="data_shop">
                  <DataShop />
                  <DataShop />
                  <DataShop />
                  <DataShop />
              </div>
              <div className="data_shop">
                  <DataShop />
                  <DataShop />
                  <DataShop />
                  <DataShop />
              </div>
          </div>
      </div>
  );
}

import React from 'react'
import CardOfProductsByRating from './CardOfProductsByRating';
import CardOfProductsByRating2 from './CardOfProductsByRating2';
import CardOfProductsByRating3 from './CardOfProductsByRating3';

export default function ProductsByRating() {
  return (
      <div className="mainOfCardOfProductsByRating">
          <div>
              <p> <span>|</span> Products By Rating</p>
          </div>
          <CardOfProductsByRating />
          <hr />
          <CardOfProductsByRating2 />
          <hr />
          <CardOfProductsByRating3 />
      </div>
  );
}

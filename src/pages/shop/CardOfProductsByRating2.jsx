import React from 'react'
import { CiStar } from "react-icons/ci";

export default function CardOfProductsByRating2() {
    return (
            <div className="CardOfProductsByRating">
                <div className="pbr">
                    <p>Classic watch</p>
                    <img src="watch5.jpg" alt="" className="imgOfRating" />
                </div>
                <div className="pbr">
                    <div>
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                </div>
            </div>
  )
}

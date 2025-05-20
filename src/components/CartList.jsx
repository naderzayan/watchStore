import React from 'react'
import '../style/components/_cartList.scss';
import { IoIosClose } from "react-icons/io";

export default function CartList() {
    return (
        <div className="cart_list">
            <p>Shopping Cart</p>
            <IoIosClose/>
        </div>
    );
}

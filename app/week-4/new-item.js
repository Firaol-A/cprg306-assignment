"use client"
import {useState} from "react";

export default function Quantity(){
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity >= 1 && quantity < 20) {
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity <= 20 && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="flex mx-auto border w-1/2 h-24 rounded-md">
            <p className="text-5xl text-center border h-1/2 w-1/4 m-2 ml-10 mt-6 rounded-md">{quantity}</p>
            <button onClick={decrement} className={`text-4xl font-bold border h-1/2 w-1/6 ml-6 mt-6 rounded-sm text-white ${quantity === 1 ? "cursor-not-allowed bg-gray-300" : "bg-cyan-600"}`}>-</button>
            <button onClick={increment} className={`text-4xl font-bold border h-1/2 w-1/6 ml-6 mt-6 rounded-sm text-white ${quantity === 20 ? "cursor-not-allowed bg-gray-300" : "bg-cyan-600"}`}>+</button>
        </div>
    )
}
"use client"
import {useState} from "react";

export default function Quantity(){
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity === 20){
            setQuantity(quantity - 1);
        }
    }
}


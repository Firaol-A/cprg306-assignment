"use client";

import {useState} from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

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

    function handleSubmit(event) {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        alert(`Item added: ${newItem.name}, Quantity: ${newItem.quantity}, Category: ${newItem.category}`);

        setName("");
        setQuantity(0);
        setCategory("produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main>
            <div className="flex mx-auto border w-1/2 h-full rounded-md">
                <form onSubmit={handleSubmit} className="mx-auto my-4 gap-3 flex flex-col justify-content text-black bg-white w-100 p-4 ">
                    <input className="border text-black border-gray-300 rounded p-2" type={"text"} placeholder={"Item Name"} required onChange={handleNameChange} value={name}/>
                    <div className="flex justify-between">
                        <div>
                            <input className={"w-12 m-2 text-2xl font-extrabold text-center border border-black rounded"} type="text" readOnly="" value={quantity} onChange={handleQuantityChange} required />
                            <button onClick={decrement} className={`px-3 py-1 m-1 font-bold text-2xl rounded-sm text-white ${quantity === 1 ? "cursor-not-allowed bg-gray-300" : "bg-cyan-600"}`} type={"button"}>-</button>
                            <button onClick={increment} className={`px-3 py-1 font-bold text-2xl rounded-sm text-white ${quantity === 20 ? "cursor-not-allowed bg-gray-300" : "bg-cyan-600"}`} type={"button"}>+</button>
                        </div>
                        <select className="border text-black border-gray-300 rounded p-2" onChange={handleCategoryChange} value={category}>
                            <option value={"produce"} defaultValue="">Produce</option>
                            <option value={"dairy"}>Dairy</option>
                            <option value={"bakery"}>Bakery</option>
                            <option value={"meat"}>Meat</option>
                            <option value={"frozen_foods"}>Frozen Foods</option>
                            <option value={"canned_goods"}>Canned Goods</option>
                            <option value={"dry_goods"}>Dry Goods</option>
                            <option value={"beverages"}>Beverages</option>
                            <option value={"snacks"}>Snacks</option>
                            <option value={"household"}>Household</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>
                    <button className={"border w-1/2 mx-auto rounded-sm text-xl  hover:bg-cyan-600 hover:text-white"} type={"submit"}>Add Item</button>
                </form>
            </div>
        </main>
    )
}


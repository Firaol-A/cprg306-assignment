"use client"
import Item from "./item";
import {useState} from "react"

export default function ItemList({items, onSelectItem}) {
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...items];

    if (sortBy === "name"){
        itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "category"){
        itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }
    if (sortBy === "quantity"){
        itemsCopy.sort((a, b) => a.quantity - b.quantity);
    }

    function handleSortName(){
        setSortBy("name");
    }
    function handleSortCategory(){
        setSortBy("category");
    }
    function handleSortQuantity(){
        setSortBy("quantity");
    }

    return(
        <main className="flex-1">
            <div className={"flex flex-row mx-auto w-fit h-fit text-center mt-10 gap-3"}>
                <button onClick={handleSortName} className="border text-black border-gray-300 rounded p-2 hover:shadow-md focus:outline-2" value={"name"}>Sort By Name</button>
                <button onClick={handleSortCategory} className="border text-black border-gray-300 rounded p-2  hover:shadow-md focus:outline-2" value={"category"}>Sort By Category</button>
                <button onClick={handleSortQuantity} className="border text-black border-gray-300 rounded p-2  hover:shadow-md focus:outline-2" value={"category"} disabled={true} hidden={true}>Sort By Quantity</button>
            </div>
            <ul>
                {itemsCopy.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onSelectItem(item)}
                    />
                ))}
            </ul>
        </main>
    )
}
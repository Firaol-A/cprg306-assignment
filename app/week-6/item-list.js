"use client"
import Item from "./item";
import itemsData from "./items.json";
import {useState} from "react"

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...itemsData];

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
        <main>
            <div className={"flex flex-row mx-auto w-fit h-fit text-center mt-10 gap-3"}>
                <button onClick={handleSortName} className="border text-black border-gray-300 rounded p-2 hover:shadow-md focus:outline-2" value={"name"}>Sort By Name</button>
                <button onClick={handleSortCategory} className="border text-black border-gray-300 rounded p-2  hover:shadow-md focus:outline-2" value={"category"}>Sort By Category</button>
                <button onClick={handleSortQuantity} className="border text-black border-gray-300 rounded p-2  hover:shadow-md focus:outline-2" value={"category"}>Sort By Quantity</button>
            </div>
            <ul>
                {itemsCopy.map((item) => (
                    <li key={itemsCopy.id}>
                        <section className="mx-auto m-3 bg-zinc-50 text-center w-1/2 rounded-md hover:drop-shadow-md">
                            <h3 className="text-lg capitalize">{item.name}</h3>
                            <p>Buy {item.quantity} in {item.category}</p>
                        </section>
                    </li>
                ))}
            </ul>
        </main>
    )
}
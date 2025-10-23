"use client";

import ItemList from "@/app/week-7/item-list";
import NewItem from "@/app/week-7/new-item";
import itemsData from "./items.json";
import {useState} from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return(
        <main>
            <h1 className="text-4xl font-bold text-center font-mono">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}
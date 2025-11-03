"use client";

import ItemList from "@/app/week-8/item-list";
import NewItem from "@/app/week-8/new-item";
import itemsData from "./items.json";
import MealIdeas from "@/app/week-8/meal-ideas";
import {useState} from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }
    // // const handleDeleteItem = (item, id) => {
    // }
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleItemSelect(item) {
        const cleaned = item.name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu, "")
            .trim()
        setSelectedItemName(cleaned);
    }
    return(
        <main>
            <header>
                <h1 className="text-4xl font-bold text-center font-mono">Shopping List</h1>
            </header>
            <section id={"add-item-form"}>
                <NewItem onAddItem={handleAddItem} />
            </section>
            <section id={"itemlist-meals"} className="flex flex-col lg:flex-row gap-4">
                <ItemList items={items} onSelectItem={handleItemSelect} />
                <MealIdeas ingredient={selectedItemName} />
            </section>
        </main>
    )
}
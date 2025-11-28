"use client";

import ItemList from "@/app/week-8/item-list";
import NewItem from "@/app/week-8/new-item";
import MealIdeas from "@/app/week-8/meal-ideas";
import {useState} from "react";
import {useUserAuth} from "@/app/week-9/_utils/auth-context";
import { useEffect } from "react";
import { addItem, getItems } from "@/app/week-10/_services/shopping-list_services";

export default function Page(){
    const [items, setItems] = useState([]);
    const { user, gitHubSignIn } = useUserAuth();

    const handleAddItem = async (newItem) => {
        if (!user) {
            return;
        }

        const id = await addItem(user.uid, newItem);
        const newItemId = {...newItem, id};

        setItems((prevItem) => [...prevItem, newItemId]);
    }

    const [selectedItemName, setSelectedItemName] = useState('');

    function handleItemSelect(item) {
        const cleaned = item.name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu, "")
            .trim()
        setSelectedItemName(cleaned);
    }

    useEffect(() => {
        const loadItems = async () => {
            if (user) {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            }
        };
        loadItems();
    }, [user]);
    return(
        <main>
            <header>
                <h1 className="text-4xl font-bold text-center font-mono">Shopping List</h1>
            </header>
            {user != null ?
                <div className={"mx-auto"}>
                    <section id={"add-item-form"}>
                        <NewItem onAddItem={handleAddItem} />
                    </section>
                    <section id={"itemlist-meals"} className="flex flex-col lg:flex-row gap-4">
                        <ItemList items={items} onSelectItem={handleItemSelect} />
                        <MealIdeas ingredient={selectedItemName} />
                    </section>
                </div>
            :
                <div className={"text-center mt-10"}>
                    <p className={"mb-10"}>Not authorized to access this page. Login to be granted access.</p>
                    <button onClick={gitHubSignIn} className={"border text-black border-gray-300 rounded p-2 hover:shadow-md cursor-pointer"}>Continue with GitHub</button>
                </div>
            }
        </main>
    )
}
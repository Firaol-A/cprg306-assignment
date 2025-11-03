"use client";

import {useEffect, useState} from "react";

async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    console.log(data);
    return data.meals || [];
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            const fetchedMealIdea = await fetchMealIdeas(ingredient);
            setMeals(fetchedMealIdea);
        }
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div className={"flex-1 w-full text-center mt-10 pr-10 text-sm"} >
            <h1 className={"text-lg mb-3 capitalize"} >MEAL IDEAS FOR &#34;{ingredient}&#34;</h1>
            {ingredient === '' ? (
                <p>Click an item to see the meal ideas.</p>
            ) : meals.length > 0 ? (
                <ul className="grid grid-cols-3 gap-4">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="rounded-lg">
                            <p className={""}>{meal.strMeal}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-md w-52 h-52 mx-auto" />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meals found for &#34;{ingredient}&#34;</p>
            )}
        </div>
    )
}

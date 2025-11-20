"use client";

export default function Item({name,quantity, category, onSelect}){
    return (
      <li onClick={() => onSelect(name)} className="mx-auto m-3 bg-zinc-50 text-center w-1/2 rounded-md hover:drop-shadow-md cursor-pointer">
          <h3 className="text-lg capitalize">{name}</h3>
          <p>Buy {quantity} in {category}</p>
      </li>
    );
}
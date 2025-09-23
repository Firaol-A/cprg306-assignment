export default function Item({name,quantity, category}){
    return (
      <section className="mx-auto m-3 bg-zinc-50 text-center w-1/2 rounded-md hover:drop-shadow-md">
          <h3 className="text-lg">{name}</h3>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
      </section>
    );
}
export default function Item({name,quantity, category}){
    return (
      <section className="bg-zinc-50 m-3 text-center w-1/2 rounded-md hover:drop-shadow-md">
          <h3 className="text-lg font-mono">{name}</h3>
          <p>{quantity}</p>
          <p>{category}</p>
      </section>
    );
}
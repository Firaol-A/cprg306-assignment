export default function Item({name,quantity, category}){
    return (
      <section className="m-3">
          <h3 className="text-lg">{name}</h3>
          <p>{quantity}</p>
          <p>{category}</p>
      </section>
    );
}
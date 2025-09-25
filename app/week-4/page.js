
export default function Page(){
    return (
        <main>
            <h1 className="text-4xl font-bold text-center font-mono">Week 4</h1>
            <section>
                <p className="text-2xl">Current Quantity Value: </p>
                <button className="text-xl border rounded-4xl mr-3 pl-10 pr-10 hover:drop-shadow-md">+</button>
                <button className="text-xl border rounded-4xl mr-3 pl-10 pr-10">-</button>
            </section>
        </main>
    )
}
import Link from "next/link";

export default function Page() {
    return (
            <main className="">
                <h1 className="text-center text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
                <ul>
                    <ol><Link className="text-3xl hover:text-blue-600 underline m-3" href="week-2">Week-2</Link></ol>
                    <ol><Link className="text-3xl hover:text-blue-600 underline m-3" href="week-3">Week-3</Link></ol>
                    <ol><Link className="text-3xl hover:text-blue-600 underline m-3" href="week-4">Week-4</Link></ol>
                    <ol><Link className="text-3xl hover:text-blue-600 underline m-3" href="week-5">Week-5</Link></ol>
                </ul>
            </main>
    );
}
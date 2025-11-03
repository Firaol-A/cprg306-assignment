import Link from "next/link";

export default function Page() {
    const weeks = ["week-2", "week-3", "week-4", "week-5", "week-6", "week-7", "week-8"];
    return (
            <main className="">
                <h1 className="text-center text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
                <ul>
                    {weeks.map((week, index) =>
                        <ol key ={week}><Link className="text-3xl hover:text-blue-600 underline m-3" href={week}>Week {index + 2}</Link></ol>)
                    }
                </ul>
            </main>
    );
}
import Link from "next/link";

export default function StudentInfo(){
    return (
        <main>
            <h1>Firaol Ahmed</h1>
            <Link className="hover:text-blue-600 underline" href="https://github.com/Firaol-A/cprg306-assignment.git">Assignment Repo</Link>
        </main>
    );
}
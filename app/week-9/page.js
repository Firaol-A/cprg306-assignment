"use client";

import { useUserAuth } from "./_utils/auth-context";
import GitHubLogo from "./assets/github-mark.png"
import Link from "next/link";

export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return(
        <main>
            <h1 className={"text-4xl font-bold text-center"} >Shopping List</h1>
            <div>
                    {!user ? (
                        <div className="text-center mt-10">
                            <p>Must Login to view your shopping list.</p>
                            <button onClick={gitHubSignIn} className={"border text-black border-gray-300 rounded p-2 hover:shadow-md cursor-pointer"}>Continue with GitHub</button>
                        </div>
                        )
                    : (
                        <div className="text-center mt-10">
                            <p>Welcome to your shopping list {user.displayName}!</p>
                            <button className={"border text-black border-gray-300 rounded p-2 hover:shadow-md cursor-pointer m-10"}>
                                <Link href={"../week-9/shopping-list"}>View Shopping List</Link>
                            </button>
                            <br/>
                            <button onClick={firebaseSignOut} className={"border text-black border-gray-300 rounded p-2 hover:shadow-md cursor-pointer hover:bg-red-500"}>Logout</button>
                        </div>
                        )
                    }
            </div>
        </main>
    );
}

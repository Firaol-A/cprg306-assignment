import "./globals.css";
import {AuthContextProvider} from "@/app/week-9/_utils/auth-context";

export const metadata = {
  title: "Web 2 Assignments",
  description: "Created by Firaol Ahmed for CPRG306",
};
export default function RootLayout({ children }) {
  return (
      <html lang="en" className="font-mono bg-white">
        <body>
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </body>
      </html>
  );
}
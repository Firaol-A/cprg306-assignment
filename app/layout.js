import "./globals.css";

export const metadata = {
  title: "Web 2 Assignments",
  description: "Created by Firaol Ahmed for CPRG306",
};
export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      {children}
      </body>
      </html>
  );
}
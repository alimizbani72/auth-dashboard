import type { Metadata } from "next";
import "./globals.scss";
import { UserProvider } from "./context/UserContext";


export const metadata: Metadata = {
  title: 'Auth App',
  description: 'Simple Auth Page',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <UserProvider>{children}</UserProvider>
    </body>
  </html>
  );
}

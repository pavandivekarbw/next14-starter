import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ReduxProvider from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next App",
    description: "Next.js starter app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <div className="container">
                        <Navbar></Navbar>
                        {children}
                    </div>
                </ReduxProvider>
            </body>
        </html>
    );
}

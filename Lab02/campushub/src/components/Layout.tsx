import type { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
    title: string;
    children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Header title={title} />

            <main>
                {children}
            </main>
            
            <footer className="meta"
                style={{ textAlign: "center", padding: "1rem" }}>
                CampusHub · Lebanese University
            </footer>
        </>
    );
}
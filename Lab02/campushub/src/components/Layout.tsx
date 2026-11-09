import type { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
    title: string;
    children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
    return (
        <>
            {/* 1. Display Header and pass title */}

            <main>
                {/* 2. Display children */}
            </main>

            {/* 3. Create a footer containing:
                CampusHub · Lebanese University */}
        </>
    );
}
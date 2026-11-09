import type { ReactNode } from "react";

export type Tone = "green" | "amber" | "red" | "neutral";

interface BadgeProps {
    tone?: Tone;
    children: ReactNode;
}

export function Badge({
    tone = "neutral",
    children
}: BadgeProps) {

    return (
        <span className={`badge badge-${tone}`}>{children}</span>
    );
}
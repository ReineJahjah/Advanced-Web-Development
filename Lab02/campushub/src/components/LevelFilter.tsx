
import type { Level } from "../types";

export type LevelOption = Level | "All";

const options: LevelOption[] = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced"
];

interface LevelFilterProps {
    value: LevelOption;
    onChange: (level: LevelOption) => void;
}

export function LevelFilter({ value, onChange }: LevelFilterProps) {
    return (
        <div role="group" aria-label="Filter by level" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {options.map(option => (
                <button
                    key={option}
                    type="button"
                    className="chip"
                    aria-pressed={option === value}
                    onClick={() => onChange(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

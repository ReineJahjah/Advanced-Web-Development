import type { Course } from "../types";

interface StatsProps {
    courses: Course[];
}

export function Stats({ courses }: StatsProps) {

    const totalCredits = courses.reduce(
        (sum, course) => sum + course.credits, 0
    );

    const advanced = courses.filter(
        course => course.level === "Advanced"
    ).length;

    return (
        <p className="meta" aria-live="polite">
            {courses.length} courses · {totalCredits} credits · {advanced} advanced
        </p>
    );
}

import type { Course, Level } from "../types";
import { Badge, type Tone } from "./Badge";

type CourseCardProps = Pick<Course, "code" | "title"> & Partial<Course>;

const levelTone: Record<Level, Tone> = {
    Beginner: "green",
    Intermediate: "amber",
    Advanced: "red"
};

export function CourseCard({
    code,
    title,
    credits = 3,
    instructor = "TBA",
    level = "Beginner"
}: CourseCardProps) {
    return (
        <article className="card">
            <Badge tone={levelTone[level]}>{level}</Badge>
            <p className="meta">{code}</p>
            <h3>{title}</h3>
            <p className="meta">{credits} credits · {instructor}</p>
            {credits >= 6 && <Badge>Heavy workload</Badge>}
        </article>
    );
}
import type { Course, Level } from "../types";

type CourseCardProps = Pick<Course, "code" | "title"> & Partial<Course>;

const levelClass: Record<Level, string> = {
    Beginner: "badge badge-green",
    Intermediate: "badge badge-amber",
    Advanced: "badge badge-red"
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
            <span className={levelClass[level]}>{level}</span>
            <p className="meta">{code}</p>
            <h3>{title}</h3>
            <p className="meta">{credits} credits · {instructor} · {level}</p>
            {credits>=6 && <p>Heavy Workload</p>}
        </article>
    );
}
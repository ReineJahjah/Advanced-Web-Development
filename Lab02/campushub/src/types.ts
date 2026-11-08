export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Course{
    code: string;
    title: string;
    credits: number;
    instructor: string;
    level: Level;
}
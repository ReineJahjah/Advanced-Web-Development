/////// TASK 4 ///////
//1st point
export type Major = "CS" | "Math" | "Physics";

export interface Student {
    id: number;
    name: string;
    major: Major;
    grade: number;
    city: string;
}

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}
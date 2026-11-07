import type { Major, Student, User } from "./types.ts";
import { fetchJson, errorMessage } from "./api.ts";

export const students: readonly Student[] = [
    { id: 1, name: "Lina", major: "CS", grade: 17, city: "Beirut" },
    { id: 2, name: "Omar", major: "Math", grade: 12, city: "Saida" },
    { id: 3, name: "Maya", major: "CS", grade: 14, city: "Beirut" },
    { id: 4, name: "Karim", major: "Physics", grade: 9, city: "Tripoli" },
    { id: 5, name: "Nour", major: "CS", grade: 19, city: "Zahle" },
];


//extends PropertyKey    =>   means K must be a valid JavaScript object key type: string, number, or symbol
// items: readonly T[]   =>   This means items is a read-only array of elements of type T. (ex array of students)
// keyFn: (item: T) => K ---> means This means keyFn is a function that:  (exp s => s.major)
//                              1. Takes an item of type T. 
//                              2. Returns a key of type K.
// Record<K, T[]> => A Record describes an object whose keys are of type K, and whose values are arrays of T.
//                  Record<Major, Student[]> => This describes an object with CS, Math, and Physics keys, each containing an array of students.
// Partial<Record<K, T[]>> describes the grouped object we're returning, where some groups might not exist.  (msln bs nrd array of Cs and math bs no Physics then its okay)
export function groupBy<T, K extends PropertyKey>(items: readonly T[],keyFn: (item: T) => K,): Partial<Record<K, T[]>> {
    // reduce<Partial<Record<K, T[]>>> => "The accumulator is an object whose keys are K and whose values are arrays of T, with keys possibly absent."
    // acc => onject le n7na 3m n3mlo w b2lbo properties kl w7de 2la array b2lba objects
    // item => object w7de mnl students
    return items.reduce<Partial<Record<K, T[]>>>((acc, item) => {
        //2wl shi bjib keyFn(item), bshuf 2za fi la hal key array 2za la2 by5l2o b3den push. 2za fi d8re push 
        (acc[keyFn(item)] ??= []).push(item);
        return acc;
    }, {});
}

/*const byMajor = groupBy(students, s => s.major);
console.log(byMajor); */


export interface Counter {
    increment(): number;
    decrement(): number;
    readonly value: number;
}

export function makeCounter(start = 0, step = 1): Counter {
    let count: number = start;

    return {
        increment: () => count += step,
        decrement: () => count -= step,
        get value() {
            return count;
        }
    };
}

/*const c = makeCounter(10, 2);

console.log(c.value);       // 10
console.log(c.increment()); // 12
console.log(c.value);       // 12
console.log(c.decrement()); // 10
console.log(c.value);       // 10 */


export class Wallet {
    #balance = 0;
    readonly owner: string;

    constructor(owner: string) {
        this.owner = owner;
    }

    deposit(amount: number): this {
        if (!(amount > 0)) {
            throw new RangeError("Amount must be positive");
        }

        this.#balance += amount;
        return this;
    }

    get balance(): number {
        return this.#balance;
    }
}

/* // Testing the Wallet class
const w1 = new Wallet("Lina");
const w2 = new Wallet("Sara");

// Test owner and initial balance
console.log(w1.owner);   // Lina
console.log(w1.balance); // 0

// Test deposit and method chaining
w1.deposit(100).deposit(50);

console.log(w1.balance); // 150
console.log(w2.balance); // 0

// Test another wallet
w2.deposit(200);

console.log(w2.balance); // 200

// Test invalid deposit
try {
    w1.deposit(-10);
} catch (err) {
    if (err instanceof RangeError) {
        console.log(err.message);
    }
}

// Balance remains unchanged
console.log(w1.balance); // 150 */

//////// Testing All Together ////////
const byMajor = groupBy(students, s => s.major);
console.log(Object.keys(byMajor));

const ranking = students.toSorted((a, b) => b.grade - a.grade).map((s) => s.name);
const best = students.find((s) => s.grade > 18); // Student | undefined
console.log(Object.keys(byMajor), ranking, best?.name ?? 'nobody');
console.log(makeCounter(10, 5).increment(), new Wallet('Lina').deposit(50).balance);

try {
  const users = await fetchJson<User[]>('https://jsonplaceholder.typicode.com/users');
  for (const { name, address, company } of users.slice(0, 3)) {
    console.log(`${name} (${address.city}) works at ${company.name}`);
  }
} catch (err) {
  console.error(errorMessage(err));
}
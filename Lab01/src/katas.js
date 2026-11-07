const students = [
  { id: 1, name: "Lina", major: "CS", grade: 17, city: "Beirut" },
  { id: 2, name: "Omar", major: "Math", grade: 12, city: "Saida" },
  { id: 3, name: "Maya", major: "CS", grade: 14, city: "Beirut" },
  { id: 4, name: "Karim", major: "Physics", grade: 9, city: "Tripoli" },
  { id: 5, name: "Nour", major: "CS", grade: 19, city: "Zahle" },
];

//first point
//part A
const [first, ...others] = students;
console.log(first);
console.log(others);
//part B
const {name, ...contact} = first
console.log(name);
console.log(contact);


//point 2
//part A
let summaries = students.map(s => ({ fullname : s.name, grade : s.grade}) );
console.log(summaries);
//part B
const curved = students.map((s) => ({ ...s, grade: Math.min(20, s.grade + 1) }));
console.log("curved", curved);
//part C
let moved = {...first, city: 'jounieh', year: 3};
console.log(moved);


//point 3
//part A
const passedNames = students.filter(s => s.grade >= 10).map(s => s.name);
console.log("Students who have passed: ",passedNames);
//part B
let avg = students.reduce((sum, s) => sum+s.grade, 0)/students.length;
console.log("average = ", avg);
//part C
let sorted = students.toSorted((a,b) => b.grade-a.grade).map(s=> s.name);
console.log(sorted);
//part D
let topCs = students.findLast(s => s.major==='CS' && s.grade>=15);
console.log("topCs: ", topCs);

//point 4
function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {

    const key = keyFn(item);

    // 1. If groups[key] doesn't exist, create an empty array.
    if(!groups[key]){
        groups[key]=[];
        groups[key].push(item);
    }else{
        groups[key].push(item);
    }

    // 2. Add the current item to groups[key].

    return groups;

  }, {});
}
const byMajor = groupBy(students, s => s.major);
console.log(byMajor);


//point 5
function makeCounter(start=0, step=1){
    let count = start;
    return {
        increment: () => count+=step,
        decrement: () => count-=step,
        reset: () => count = start,
        value: () => count
    };
}
const c = makeCounter(10, 2);
console.log(c.value());      // 10
console.log(c.increment());  // 12
console.log(c.increment());  // 14
console.log(c.decrement());  // 12
console.log(c.reset());      // 10
console.log(c.value());      // 10

//point 6
class Wallet{
    #balance = 0;
    static counter = 0;
    constructor(){
        Wallet.counter++;
    }
    get balance(){
        return this.#balance;
    }
    deposit(amount){
        this.#balance += amount;
        return this;
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
        return this;
    }
}
const w1 = new Wallet();
const w2 = new Wallet();
console.log("\nthis is point 6");
console.log(Wallet.counter); // 2

w1.deposit(100).deposit(50).withdraw(30);

console.log(w1.balance); // 120
console.log(w2.balance); // 0

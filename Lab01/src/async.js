///////// TASK 3 /////////
//point 1
async function sleep(ms){
    return new Promise((resolve) => {
        console.log("inside sleep promis");
        setTimeout(() => {
            console.log("waiting");
            resolve();
        },ms);
    });
}
//await sleep(2000);
//console.log("End");

//point 2
async function runSequential() {
    const start = performance.now();

    await sleep(300);
    await sleep(200);
    await sleep(100);

    const elapsed = performance.now() - start;
    console.log("Sequential time:", elapsed, "ms");
}
//runSequential();
async function runParallel() {
    const start = performance.now();

    await Promise.all([
        sleep(300),
        sleep(200),
        sleep(100),
    ]);

    const elapsed = performance.now() - start;
    console.log("Parallel time:", elapsed, "ms");
}
//runParallel();

//point 3
async function fetchUsers(timeoutMs = 5000) {
    const controller = new AbortController();

    const timer = setTimeout(() => {
        controller.abort();
    }, timeoutMs);

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            { signal: controller.signal }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        const userDetails = users.map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            city: u.address.city
        }));

        console.table(userDetails);

    } catch (err) {
        if (err.name === "AbortError") {
            console.log("Request timed out!");
        } else {
            console.log("Error:", err.message);
        }
    } finally {
        clearTimeout(timer);
    }
}

fetchUsers(5000);
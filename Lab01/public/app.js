const searchInput = document.getElementById("search");
const status = document.getElementById("status");
const userList = document.getElementById("user-list");
let users = [];

async function fetch_user(){
    const controller = new AbortController();
    const timer = setTimeout(()=>{
        controller.abort();
    }, 5000);
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users", {signal: controller.signal});
        if(!result.ok){
            throw new Error(`http error: ${result.status}`);
        }
        users = await result.json();
        renderUsers(users);
    }catch(err){
        status.textContent = "Failed to load users";
        console.error(err);
    }finally{
        clearTimeout(timer);
    }
}

await fetch_user();

userList.addEventListener("click", (event) => {
    const button = event.target.closest(".details-btn");

    if (!button) return;

    const li = button.closest("li");
    const details = li.querySelector(".details");

    if (details.hidden) {
        details.hidden = false;
        button.textContent = "Hide";
        button.setAttribute("aria-expanded", "true");
    } else {
        details.hidden = true;
        button.textContent = "Details";
        button.setAttribute("aria-expanded", "false");
    }
});

function renderUsers(items) {
    userList.replaceChildren();
    items.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `name: ${user.name} => email: ${user.email}`;
            //creating button for each user
            const button = document.createElement('button');
            button.textContent="Details";
            button.classList.add('details-btn');
            button.setAttribute("aria-expanded", "false");
            li.appendChild(button);
            // creating details of a user(that will appear after clicking button)
            const details = document.createElement("p");
            details.classList.add("details");
            details.hidden = true;
            details.textContent = `Phone: ${user.phone},
            City: ${user.address.city},
            Company: ${user.company.name}`;
            li.appendChild(details);

            userList.appendChild(li);
        });
        status.textContent=`loaded ${items.length} user(s)`;
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    const filteredusers = users.filter((u) => `${u.name} ${u.email}`.toLowerCase().includes(query));
    renderUsers(filteredusers);
});
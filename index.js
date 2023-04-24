function init() {
    const menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener("click", () => {
        document.querySelector(".mobile-nav").classList.toggle("mobile-nav-active");
    })
}

let items = [];

function getItems() {
    items = JSON.parse(localStorage.getItem("items"));
    if (items) {
        document.getElementById("loading-items").remove();
    } else {
        document.getElementById("loading-items").innerText = "Submit form to add an item"
    }
    items.map((item) => {
        const table = document.getElementById("items");
        table.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
            </tr>`
    })
}

function addItem() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    if (id && name && price) {
        const newItem = { id, name, price }
        if (items) {
            items.push(newItem);
        } else {
            items = [newItem];
            document.getElementById("loading-items").remove()
        }
        localStorage.setItem("items", JSON.stringify(items));

        const table = document.getElementById("items");
        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
            </tr>`

        document.getElementById("id").value = ""
        document.getElementById("name").value = ""
        document.getElementById("price").value = ""
        alert("Item successfully added!");
    } else {
        if (!id) {
            alert("Enter item id");
        } else if (!name) {
            alert("Enter item name");
        } else {
            alert("Enter item price");
        }
    }
}

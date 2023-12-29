// Where the Wild Things Are

const h2 = document.createElement("h2");
h2.textContent = "Powered by Javascript";

const content = document.getElementById("content");
content.append(h2);

const navItems = document.querySelectorAll("#nav li");
navItems.forEach(currentItem => 
    currentItem.addEventListener("click", function ()  {
        navItems.forEach(item =>
            item.classList.remove("selected")
        );
        currentItem.classList.toggle("selected");
}));


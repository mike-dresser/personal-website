// Where the Wild Things Are
function poweredBy() {
    const h2 = document.createElement("h2");
    h2.textContent = "Powered by Javascript";

    const content = document.getElementById("content");
    content.append(h2);
}

const navItems = document.querySelectorAll("#nav li");
const contentItems = document.querySelectorAll("#content div")

function clearPageContent() {
    contentItems.forEach(item =>
        item.classList.remove("selected")
    )
}

function showPageContent(pageClass) {
    const activePage = document.querySelector(`#content div.${pageClass}`);
    activePage.classList.toggle('selected');
}

function initialPageState(show) {
    poweredBy();
    initializeNav();
    showPageContent(`${show}`);
}

function initializeNav() {
    navItems.forEach(currentItem => 
        currentItem.addEventListener("click", function ()  {
            navItems.forEach(item =>
                item.classList.remove("selected")
            );
            clearPageContent();
            document.querySelector(`div.${currentItem.classList.value}`).classList.toggle("selected");
            currentItem.classList.toggle("selected");
    }));
}


initialPageState('about');
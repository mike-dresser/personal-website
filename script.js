
function clearPageContent() {
    const contentItems = document.querySelectorAll("#content div")
    contentItems.forEach(item =>
        item.classList.remove("selected")
    )
}

function showPageContent(pageClass) {
    const activePage = document.querySelector(`#content div.${pageClass}`);
    activePage.classList.toggle('selected');
}

function showNavState(item) {
    document.querySelector(`#nav li.${item}`).classList.toggle("selected");
}

function initialPageState(navItem) {
    initializeNav();
    showNavState(navItem);
    showPageContent(`${navItem}`);
}

/* I want to tidy initializeNav() up. Currently we
-- select all nav list items
-- for each add a click eventListener
-- the callback function clears removes .selected class from 
the nav item, and clears the corresponding div
-- then toggles on the selected nav item / shows the corresponding div

I should be able to separate the toggle behavior from the initialize function
*/
function initializeNav() {
    const navItems = document.querySelectorAll("#nav li");
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
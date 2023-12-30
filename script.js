// The page content (div#content div)s are styled "display: none" by default;
// the .selected class is added to change style to "display: block".

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

// Nav items share the class name with the content div they correspond to
// (.about, .projects, etc)
function selectNavItem(item) {
    document.querySelector(`#nav li.${item}`).classList.toggle("selected");
}

function initialPageState(navItem) {
    initializeNav();
    selectNavItem(navItem);
    showPageContent(`${navItem}`);
}

/* I want to tidy initializeNav() up. Currently we
-- select all nav list items
-- for each add a click eventListener
-- the callback function removes .selected class from 
the nav item and clears the corresponding div (removing .selected)
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
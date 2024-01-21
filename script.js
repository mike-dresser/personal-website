// The page content (div#content div)s are styled "display: none" by default;
// the .selected class is added to change style to "display: block".


// Clears the .selected class from #nav (toggling the border) or #content <div>
// (switching to the default display: none). Gets us back to "nothing selected".
function clearSelectedClass(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item =>
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
    showPageContent(navItem);
}

/*
Using event delegation, the click event on the #nav <li>
or its contained <a> (not sure if the link tag is necessary / beneficial?) 
bubbles up to the #nav div and passes a reference to the click target, including its 
text content. (It's the same whether the click is on the <li> or nested <a>).

The the lowercase version of this value matches the class name of the associated
#content <div>, and allows me to toggle .selected to make it visible.
*/

function initializeNav() {
    document.querySelector("#nav").addEventListener("click", clickEvent => {
        const navTarget = clickEvent.target.textContent.toLowerCase();
        clearSelectedClass("#nav li");
        selectNavItem(navTarget);
        clearSelectedClass("#content div");
        document.querySelector(`#content div.${navTarget}`).classList.toggle("selected");
    });
}
initialPageState('about');
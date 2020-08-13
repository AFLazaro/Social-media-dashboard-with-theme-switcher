/*** SELECTORS ***/
const body = document.querySelector("body");                            // Body of document
const button = document.querySelector("button");                        // Button element
const tab = document.querySelector(".switch");                          // Circle "switch" on button
const outerContainer = document.querySelector(".container-outer");      // Outer container
const card = [ ...document.querySelectorAll(".card") ];                 // Cards
const att = document.querySelector (".attribution");                    // Attribution section

// Selects all elements to change text white
const whiteText = [ ...document.querySelectorAll(".top-title, .bottom-title, #button-text, .card-large__social-count, .card-small__count") ];

// Selects all elements to change text blue
const blueText = [ ... document.querySelectorAll(".follower-total, .card-large__social-name, .card-large__social-followers, .card-small__metric") ];


/*** EVENT LISTENER ***/
button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
        toDarkMode (button, tab, body, outerContainer, card, att);
        changeTextColor(whiteText, blueText);
    } else {
        toDarkMode (button, tab, body, outerContainer, card, att);
        changeTextColor(whiteText, blueText);
    };
});


/*** FUNCTION DECLARATION ***/
// Toggles "dark mode" classes on and off
function toDarkMode (button, tab, body, outerContainer, card, att) {
    button.classList.toggle("clicked");
    tab.classList.toggle("switch--clicked");
    body.classList.toggle("body--dark");
    outerContainer.classList.toggle("container-outer--dark");
    card.forEach((e) => {
        e.classList.toggle("card--dark");
    });
    att.classList.toggle("attribution--dark");
}

// Toggles "dark mode" text color classes on and off
function changeTextColor (whiteText, blueText) {
    whiteText.forEach((e) => {
        e.classList.toggle("white-text");
    });

    blueText.forEach((e) => {
        e.classList.toggle("blue-text");
    });
};
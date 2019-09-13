// -------------------------------------------------- //
// ---------------- Global Variables ---------------- //
// -------------------------------------------------- //

// Wax Banner Container
const waxBannerContainer = document.getElementById("wax-banner-container");
// Wax Banner
const waxBanner = document.getElementById("wax-banner-location");
let waxColour;
let dripColour;
const waxBannerDrip = document.getElementsByClassName("wax-banner-drip-path");
let waxInner;
const waxModalPrimary = document.getElementsByClassName("modal-drip-colour");
const waxModalSecondary = document.getElementsByClassName("modal-drip-colour-secondary")[0];
// Get the modal
const waxModal = document.getElementById("modal-container");
const modalContent = document.getElementsByClassName("modal-content")[0];
const modalContentContainer = document.getElementsByClassName("modal-content-container")[0];
// Set Map images as Variables
const gndFlr = document.getElementById("gnd-flr");
const basementFlr = document.getElementById("basement-flr");
const firstFlr = document.getElementById("first-flr");
// Set Map Floor Buttons
const gnd = document.getElementById("gnd");
const basement = document.getElementById("basement");
const first = document.getElementById("first");
// Drip Function

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const modalData = document.getElementById('modal-data');
// Set room buttons on the Map
const roomId = document.getElementsByClassName('room');
// Set Modal Data Array
const roomDataModal = [
    {
        header: 'Welcome to Wax+',
        image:  'img/lobby.jpg',
        fill: '#0091FF',
        stroke: '#0074CC',
        inner: '#8accff',
        text: 'Step inside and look at some wax! And join us on a journey of discovery in this exciting attraction. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'
    },
    {
        header: 'Gift Shop',
        image: 'img/gift.jpg',
        fill: '#FF00B4',
        stroke: '#BB0183',
        inner: '#ff8bdc',
        text: 'Take a piece of the wax magic home with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'
    },
    {
        header: 'Start your Journey',
        image: 'img/start.jpg',
        fill: '#FFE600',
        stroke: '#C7B301',
        inner: '#fff6a4',
        text: 'Step into a world of wax. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'
    },
    {
        header: 'Horror',
        image: 'img/horror.jpg',
        fill: '#0091FF',
        stroke: '#0074CC',
        inner: '#8accff',
        text: 'Dare to walk through the horror vaults. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'History',
        image: 'img/history.jpg',
        fill: '#FF00B4',
        stroke: '#BB0183',
        inner: '#ff8bdc',
        text: 'Walk through the history of Ireland. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'Enchanted Forest',
        image: 'img/myth.jpg',
        fill: '#FFE600',
        stroke: '#C7B301',
        inner: '#fff6a4',
        text: 'Dare to walk through the horror vaults. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'Kids World',
        image: 'img/kids.jpg',
        fill: '#0091FF',
        stroke: '#0074CC',
        inner: '#8accff',
        text: 'Meet some of your favorite cartoon  characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'Science World',
        image: 'img/science.jpg',
        fill: '#FF00B4',
        stroke: '#BB0183',
        inner: '#ff8bdc',
        text: 'Learn about the revolutionary contributions to science. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'
    },
    {
        header: 'Mirror Maze',
        image: 'img/mirror.jpg',
        fill: '#FFE600',
        stroke: '#C7B301',
        inner: '#fff6a4',
        text: 'Are you able to make it through our mirror maze? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'Irish Media Stars',
        image: 'img/media.jpg',
        fill: '#22FF00',
        stroke: '#1CC702',
        inner: '#b2ffa6',
        text: 'Meet some of your favorite stars from TV and music. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    },
    {
        header: 'Writers Tavern',
        image: 'img/writers.jpg',
        fill: '#ff0000',
        stroke: '#CE0000',
        inner: '#ff7373',
        text: 'Step in and wet your whistle with some of the most influential writers in Irish history. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sed tellus quis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa turpis, convallis ut mattis aliquet, mollis nec massa. Mauris tempus nisl sed tempor ultrices. Morbi sit amet odio nisl. Etiam maximus fringilla turpis vitae maximus. Maecenas justo mauris, dignissim in fermentum vitae, maximus vel elit. Fusce condimentum mattis consectetur. Donec consequat lorem arcu, sit amet placerat dui imperdiet non. Maecenas id libero at turpis suscipit pharetra a at est. Nulla venenatis sed ligula et luctus. Suspendisse placerat leo eu pellentesque tristique.'       
    }
];

// -------------------------------------------------- //
// ----------------- Floor Selector ----------------- //
// -------------------------------------------------- //

gnd.onclick = function() {
    closeMap(basementFlr, basement);
    closeMap(firstFlr, first);
    openMap(gnd, gndFlr);
}
basement.onclick = function() {
    closeMap(firstFlr, first);
    closeMap(gndFlr, gnd);
    openMap(basement, basementFlr);
}
first.onclick = function() {
    closeMap(basementFlr, basement);
    closeMap(gndFlr, gnd);
    openMap(first, firstFlr);
}

// -------------------------------------------------- //
// ----------------- Modal Selector ----------------- //
// -------------------------------------------------- //

// open Modal
function openModal(cardId){
    for (let i = 0; i < cardId.length; i++) {
        cardId[i].onclick = function() {
            
            // Add correct user data object from array list to variable
            let header = roomDataModal[i].header;
            let img = roomDataModal[i].image;
            let txt = roomDataModal[i].text;
            waxColour = roomDataModal[i].fill;
            waxDrip = roomDataModal[i].stroke;
            waxInner = roomDataModal[i].inner;

            // Wax Banner slide down
            runBanner(waxColour);
            fadeInModal(waxColour, waxInner);
            // Clear old data
            removeClasses(modalData);
            // Add Content to Modal
            addContent('H2', header, modalData, 'modal-header');
            addContent('IMG', img, modalData, 'modal-img');
            addContent('P', txt, modalData);
            addContent('IMG', 'img/logo.png', modalData, 'modal-logo');
            
            // Scroll to top of Modal
            document.getElementsByClassName('modal-header')[0].scrollIntoView();
        };        
    }
}

// Close Modal when X is clicked
span.onclick = function() {    
    closeModal();
}

// -------------------------------------------------- //
// ------------ Wax Banner Splash Screen ------------ //
// -------------------------------------------------- //

// Execute Wax Banner slide down
function runBanner() {
    waxBannerContainer.style.zIndex = "400";
    // Add Colour to wax banner background
    waxBanner.style.fill = waxColour;
    // Add Colour for Drip outline
    for (let i = 0; i < waxBannerDrip.length; i ++){
        waxBannerDrip[i].style.stroke = waxDrip;
    }
    waxBanner.classList.add('wax-banner');
}


// -------------------------------------------------- //
// -------------------  Functions ------------------- //
// -------------------------------------------------- //

// Function to open modal
function fadeInModal(primary, secondary) {
    // Change to correct background colours
    for (let i = 0; i < waxModalPrimary.length; i ++){
        waxModalPrimary[i].style.fill = primary;
    }
    waxModalSecondary.style.fill = secondary;
    // Remove Close Class
    waxModal.classList.remove("fade-out");
    modalContentContainer.classList.remove("fade-out");

    // Add open-modal class
    waxModal.classList.add("modal-fade-in");
    modalContentContainer.classList.add("modal-fade-in");

    // Bring Modal container and background to front
    waxModal.style.zIndex = '500';
    modalContentContainer.style.zIndex = '1000';

    // Update Modal container and background opacity
    waxModal.style.opacity = '1';
    modalContentContainer.style.opacity = '1';
}

// Removes all classes from the parent //
function removeClasses(el){
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

// Add Content
function addContent(element, string, parent, className) {
    newContent = document.createElement(element);
    if (element === 'IMG') {
        newContent.className = className;
        newContent.setAttribute('alt', 'profile avatar');
        newContent.setAttribute('src', string);
    } else if (typeof className !== "undefined") {
        newContent.className = className;
        newContent.innerHTML = string;
    } else {
        newContent.innerHTML = string;
    }
    parent.appendChild(newContent);
}

// Close Map and remove 'Active' class
function closeMap(el, activeEl) {
    el.style.display = 'none';
    activeEl.className = '';
}

// Open Map
function openMap(flrMap, flrClass) {
    flrMap.className = 'floor-active';
    flrClass.style.display = 'block';
}

function removeStyle(el) {
    el.removeAttribute("style");
}

// Close Modals
function closeModal(){
    // Send Wax Banner Container to back
    waxBannerContainer.removeAttribute("style");
    waxBanner.classList.remove('wax-banner');

    // Close Wax Modal and content
    waxModal.classList.remove("modal-fade-in");
    modalContentContainer.classList.remove("modal-fade-in");

    waxModal.classList.add("fade-out");
    modalContentContainer.classList.add("fade-out");

    // Remove Style Attributes
    setTimeout(removeStyle, 500, waxModal);
    setTimeout(removeStyle, 500, modalContentContainer);
}

// -------------------------------------------------- //
// ------------------- App Run ---------------------- //
// -------------------------------------------------- //

// Hide Basement and First Floor
closeMap(basementFlr, basement);
closeMap(firstFlr, first);

// Run open model function
openModal(roomId);
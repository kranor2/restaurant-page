import "./style.css";
import Background from "./koi-fish_bkgd.gif";
import InstaIcon from "./instagram-icon.png";
import TwitchIcon from "./twitch-icon.png";
import YoutubeIcon from "./youtube-icon.png";
import LinkedinIcon from "./linkedin-icon.png";
import Nuggies from "./nuggies.png";
import FishSticks from "./fish-sticks.png";
import Sandwich from "./sammich.png";
import MacCheese from "./macncheese.png";
import Fries from "./fries.png";
import Pickles from "./pickles.png";
import CheeseSticks from "./cheese-sticks.png";
import Apples from "./apples.png";
import Carrots from "./carrots.png";
import GreenBeans from "./greenbeans.png";

const Nav = document.querySelector("nav");
const Socials = document.createElement("div");
Socials.classList.add("socials");

const Insta = document.createElement("a");
Insta.href = "https://www.instagram.com/goodappleboy/";
Insta.classList.add("icon");
const instaLink = document.createElement("img");
instaLink.src = InstaIcon;
instaLink.classList.add("icon");
Insta.appendChild(instaLink);
Socials.appendChild(Insta);

const Twitch = document.createElement("a");
Twitch.href = "https://www.twitch.tv/goodappleboy";
Twitch.classList.add("icon");
const twitchLink = document.createElement("img");
twitchLink.src = TwitchIcon;
twitchLink.classList.add("icon");
Twitch.appendChild(twitchLink);
Socials.appendChild(Twitch);

const Youtube = document.createElement("a");
Youtube.href = "https://www.youtube.com/@goodappleboy";
Youtube.classList.add("icon");
const youtubeLink = document.createElement("img");
youtubeLink.src = YoutubeIcon;
youtubeLink.classList.add("icon");
Youtube.appendChild(youtubeLink);
Socials.appendChild(Youtube);

const Linkedin = document.createElement("a");
Linkedin.href = "https://www.linkedin.com/in/rdcnorth";
Linkedin.classList.add("icon");
const linkedinLink = document.createElement("img");
linkedinLink.src = LinkedinIcon;
linkedinLink.classList.add("icon");
Linkedin.appendChild(linkedinLink);
Socials.appendChild(Linkedin);

Nav.appendChild(Socials);

const Content = document.getElementById("content");

const Hero = document.createElement("div");
Hero.classList.add("hero");
const heroHeadline = document.createElement("h1");
heroHeadline.textContent += "Enjoy your favorite safe foods in a sensory-friendly and judgment free environment with Nigel and Applecat!";
Hero.appendChild(heroHeadline);
const heroSlogan = document.createElement("h2");
heroSlogan.setAttribute("id", "slogan");
heroSlogan.textContent += "Affordable and accessible meals for all ages!";
Hero.appendChild(heroSlogan);

Content.appendChild(Hero);

const Yelp = document.createElement("div");
Yelp.classList.add("reviews");
const reviewsTitle = document.createElement("h3");
reviewsTitle.textContent += "Reviews";
Yelp.appendChild(reviewsTitle);
const reviewBody = document.createElement("p");
reviewBody.classList.add("note");
reviewBody.textContent += "All my favorite foods, off the kids menu! This is one restaurant that is an easy, safe space for me to eat, and I'll keep coming back. The dino nuggies are a personal favorite!";
Yelp.appendChild(reviewBody);
const reviewQuote = document.createElement("p");
reviewQuote.classList.add("note");
reviewQuote.textContent += "-kranor2";
Yelp.appendChild(reviewQuote);

Content.appendChild(Yelp);

const Info = document.createElement("div");
Info.classList.add("info");

const Modes = document.createElement("div");
Modes.classList.add("modes");
const modesTitle = document.createElement("h3");
modesTitle.textContent += "Hours";
Modes.appendChild(modesTitle);
const modesHours = document.createElement("p");
modesHours.setAttribute("id", "hours");
modesHours.textContent += "Monday-Sunday: 12pm-12am";
Modes.appendChild(modesHours);
const modesNote = document.createElement("p");
modesNote.classList.add("note");
modesNote.textContent += "We also offer drive-thru, carry-out, and delivery!"
Modes.appendChild(modesNote);

Info.appendChild(Modes);

const Location = document.createElement("div");
Location.classList.add("location");
const locationTitle = document.createElement("h3");
locationTitle.textContent += "Location";
Location.appendChild(locationTitle);
const Address = document.createElement("p");
Address.classList.add("note");
Address.textContent += "1107 OhWyrm Drive";
Location.appendChild(Address);
const CityState = document.createElement("p");
CityState.classList.add("note");
CityState.textContent += "Dinosaur, Colorado";
Location.appendChild(CityState);

Info.appendChild(Location);

Content.appendChild(Info);

console.log("webpack did the thing");

const Home = document.getElementById("home");
Home.addEventListener("click", function() {
    Content.innerHTML = "";
    
    Content.appendChild(Hero);
    Content.appendChild(Yelp);
    Content.appendChild(Info);

});

const Menu = document.getElementById("menu");
Menu.addEventListener("click", function() {
    Content.innerHTML = "";

    const MenuInstructions = document.createElement("div");
    MenuInstructions.classList.add("menu-instructions");
    const Menuhead = document.createElement("h1");
    Menuhead.setAttribute("id", "menuhead");
    Menuhead.textContent += "Menu";
    MenuInstructions.appendChild(Menuhead);
    const Directions = document.createElement("h2");
    Directions.setAttribute("id", "directions");
    Directions.textContent += "Pick one entree and three sides, two entrees and two sides, or three entrees and one side.";
    MenuInstructions.appendChild(Directions);

    Content.appendChild(MenuInstructions);

    const menuEntrees = document.createElement("div");
    menuEntrees.classList.add("entree-menu");
    const entreeHead = document.createElement("h3");
    entreeHead.textContent += "Entrees";
    menuEntrees.appendChild(entreeHead);
    const Entrees = document.createElement("div");
    Entrees.classList.add("entrees");

    const nuggies = document.createElement("div");
    nuggies.classList.add("item");
    const nugTitle = document.createElement("p");
    nugTitle.classList.add("note");
    nugTitle.setAttribute("id", "item-name");
    nugTitle.textContent += "Dino nuggies";
    nuggies.appendChild(nugTitle);
    const nugImg = document.createElement("img");
    nugImg.classList.add("example");
    nugImg.src = Nuggies;
    nuggies.appendChild(nugImg);
    Entrees.appendChild(nuggies);

    const fishies = document.createElement("div");
    fishies.classList.add("item");
    const fishTitle = document.createElement("p");
    fishTitle.classList.add("note");
    fishTitle.setAttribute("id", "item-name");
    fishTitle.textContent += "Fish sticks";
    fishies.appendChild(fishTitle);
    const fishImg = document.createElement("img");
    fishImg.classList.add("example");
    fishImg.src = FishSticks;
    fishies.appendChild(fishImg);
    Entrees.appendChild(fishies);

    const sammich = document.createElement("div");
    sammich.classList.add("item");
    const samTitle = document.createElement("p");
    samTitle.classList.add("note");
    samTitle.setAttribute("id", "item-name");
    samTitle.textContent += "Chicken or Fish sandwich";
    sammich.appendChild(samTitle);
    const samImg = document.createElement("img");
    samImg.classList.add("example");
    samImg.src = Sandwich;
    sammich.appendChild(samImg);
    Entrees.appendChild(sammich);

    const cheesyMac = document.createElement("div");
    cheesyMac.classList.add("item");
    const cheesyTitle = document.createElement("p");
    cheesyTitle.classList.add("note");
    cheesyTitle.setAttribute("id", "item-name");
    cheesyTitle.textContent += "Mac and cheese";
    cheesyMac.appendChild(cheesyTitle);
    const cheesyImg = document.createElement("img");
    cheesyImg.classList.add("example");
    cheesyImg.src = MacCheese;
    cheesyMac.appendChild(cheesyImg);
    const cheesyAst = document.createElement("p");
    cheesyAst.setAttribute("id", "asterisk");
    cheesyAst.textContent += "*Optional, with chicken";
    cheesyMac.appendChild(cheesyAst);
    Entrees.appendChild(cheesyMac);

    menuEntrees.appendChild(Entrees);
    Content.appendChild(menuEntrees);

    const menuSides = document.createElement("div");
    menuSides.classList.add("side-menu");
    const sideHead = document.createElement("h3");
    sideHead.textContent += "Sides";
    menuSides.appendChild(sideHead);
    const Sides = document.createElement("div");
    Sides.classList.add("sides");

    const fries = document.createElement("div");
    fries.classList.add("item");
    const friesTitle = document.createElement("p");
    friesTitle.classList.add("note");
    friesTitle.setAttribute("id", "item-name");
    friesTitle.textContent += "Fries";
    fries.appendChild(friesTitle);
    const friesImg = document.createElement("img");
    friesImg.classList.add("example");
    friesImg.src = Fries;
    fries.appendChild(friesImg);
    const friesAst = document.createElement("p");
    friesAst.setAttribute("id", "asterisk");
    friesAst.textContent += "Regular or sweet potato";
    fries.appendChild(friesAst);
    Sides.appendChild(fries);

    const pickles = document.createElement("div");
    pickles.classList.add("item");
    const picklesTitle = document.createElement("p");
    picklesTitle.classList.add("note");
    picklesTitle.setAttribute("id", "item-name");
    picklesTitle.textContent += "Fried pickles";
    pickles.appendChild(picklesTitle);
    const picklesImg = document.createElement("img");
    picklesImg.classList.add("example");
    picklesImg.src = Pickles;
    pickles.appendChild(picklesImg);
    Sides.appendChild(pickles);

    const mozz = document.createElement("div");
    mozz.classList.add("item");
    const mozzTitle = document.createElement("p");
    mozzTitle.classList.add("note");
    mozzTitle.setAttribute("id", "item-name");
    mozzTitle.textContent += "Mozzarella sticks";
    mozz.appendChild(mozzTitle);
    const mozzImg = document.createElement("img");
    mozzImg.classList.add("example");
    mozzImg.src = CheeseSticks;
    mozz.appendChild(mozzImg);
    const mozzAst = document.createElement("p");
    mozzAst.setAttribute("id", "asterisk");
    mozzAst.textContent += "*Fried, or string cheese";
    mozz.appendChild(mozzAst);
    Sides.appendChild(mozz);

    const apples = document.createElement("div");
    apples.classList.add("item");
    const applesTitle = document.createElement("p");
    applesTitle.classList.add("note");
    applesTitle.setAttribute("id", "item-name");
    applesTitle.textContent += "Apple Slices";
    apples.appendChild(applesTitle);
    const applesImg = document.createElement("img");
    applesImg.classList.add("example");
    applesImg.src = Apples;
    apples.appendChild(applesImg);
    const applesAst = document.createElement("p");
    applesAst.setAttribute("id", "asterisk");
    applesAst.textContent += "*Optional, with peanut butter or caramel sauce";
    apples.appendChild(applesAst);
    Sides.appendChild(apples);

    const carrots = document.createElement("div");
    carrots.classList.add("item");
    const carrotsTitle = document.createElement("p");
    carrotsTitle.classList.add("note");
    carrotsTitle.setAttribute("id", "item-name");
    carrotsTitle.textContent += "Carrot sticks";
    carrots.appendChild(carrotsTitle);
    const carrotsImg = document.createElement("img");
    carrotsImg.classList.add("example");
    carrotsImg.src = Carrots;
    carrots.appendChild(carrotsImg);
    const carrotsAst = document.createElement("p");
    carrotsAst.setAttribute("id", "asterisk");
    carrotsAst.textContent += "*Optional, with ranch dressing";
    carrots.appendChild(carrotsAst);
    Sides.appendChild(carrots);

    const beans = document.createElement("div");
    beans.classList.add("item");
    const beansTitle = document.createElement("p");
    beansTitle.classList.add("note");
    beansTitle.setAttribute("id", "item-name");
    beansTitle.textContent += "Green beans";
    beans.appendChild(beansTitle);
    const beansImg = document.createElement("img");
    beansImg.classList.add("example");
    beansImg.src = GreenBeans;
    beans.appendChild(beansImg);
    Sides.appendChild(beans);

    menuSides.appendChild(Sides);
    Content.appendChild(menuSides);
})
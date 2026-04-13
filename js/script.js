document.addEventListener("DOMContentLoaded", () => {


/* select DOM elemnts */
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");
const greeting = document.getElementById("dynamic-greeting");
const searchInput = document.getElementById("project-search");
const sortSelect = document.getElementById("project-sort");
const cards = document.querySelectorAll(".project-card");
const titles = document.querySelectorAll(".project-title");
const container = document.querySelector(".projects-wrapper");
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const apiContainer = document.getElementById("api-data");
const factButton = document.getElementById("fact-btn");


/* dark mode system + saves user perfernece using localStorage */
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
body.classList.add("dark");
toggleBtn.textContent = "☀️";
}

/* toggle between dark and light theme */
toggleBtn.addEventListener("click", () => {
body.classList.toggle("dark");
const isDark = body.classList.contains("dark");
toggleBtn.textContent = isDark ? "☀️" : "🌙";

/* save user preference */
localStorage.setItem("theme", isDark ? "dark" : "light");
});


/*  greeting based on the time of day */
const hour = new Date().getHours();
let message = "";

if(hour < 12){
message = "Good Morning 👋🏻";
}
else if(hour < 18){
message = "Good Afternoon 👋🏻";
}
else{
message = "Good Evening 👋🏻";
}

greeting.textContent = message;

/* fade affect */
setTimeout(()=>{
greeting.style.opacity = "1";
},200);

setTimeout(()=>{
greeting.style.opacity = "0";
},2500);


/*  empty search message */
const emptyMessage = document.createElement("p");
emptyMessage.textContent = "No projects found. Try another search.";
emptyMessage.style.textAlign = "center";
emptyMessage.style.marginTop = "20px";
emptyMessage.style.display = "none";

container.appendChild(emptyMessage);


/*  projects search - filter projects by title  */
searchInput.addEventListener("input", () => {

const value = searchInput.value.toLowerCase();
let visibleCount = 0;

cards.forEach(card => {
const title = card.querySelector("h3").textContent.toLowerCase();

/* show card if it matches search */
if(title.startsWith(value)){
card.style.display = "flex";
visibleCount++;
}else{
card.style.display = "none";
}
});

/* show empty message if no results */
if(visibleCount === 0){
emptyMessage.style.display = "block";
}else{
emptyMessage.style.display = "none";
}
});


/*  sort projects  */
sortSelect.addEventListener("change", () => {

const arr = [...cards];

arr.sort((a,b)=>{

const A = a.querySelector("h3").textContent.toLowerCase();
const B = b.querySelector("h3").textContent.toLowerCase();

/* A → Z sorting */
if(sortSelect.value === "az"){
return A.localeCompare(B);
}

/* Z → A sorting */
if(sortSelect.value === "za"){
return B.localeCompare(A);
}

return 0;
});

/* reinsert sorted cards into container */
arr.forEach(card => container.appendChild(card));
});


/* project expand/collapse  */
titles.forEach(title => {

title.addEventListener("click", ()=>{

const card = title.closest(".project-card");
const desc = card.querySelector(".project-description");

/* close all other open cards */
document.querySelectorAll(".project-card").forEach(otherCard=>{

if(otherCard !== card){
otherCard.classList.remove("open");
const otherDesc = otherCard.querySelector(".project-description");

if(otherDesc){
otherDesc.style.maxHeight = null;
}}
});

/* toggle current card */
card.classList.toggle("open");

if(card.classList.contains("open")){
desc.style.maxHeight = desc.scrollHeight + "px";
}else{
desc.style.maxHeight = null;
}});
});


/*  contact form validation - ensures user fills all fields + validates email format */
form.addEventListener("submit",(e)=>{
e.preventDefault();

const name = form.querySelector("input[name='name']");
const email = form.querySelector("input[name='email']");
const messageField = form.querySelector("textarea[name='message']");

if(!name.value || !email.value || !messageField.value){
formMessage.style.color = "red";
formMessage.textContent = "Please fill in all fields.";
return;}

/* email validation regex */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){
formMessage.style.color = "red";
formMessage.textContent = "Please enter a valid email address.";
return;}

/* success message */
formMessage.style.color = "green";
formMessage.textContent = "Message sent successfully.";

form.reset();

setTimeout(()=>{
formMessage.textContent = "";
},2000);
});


/*  random tech facts (button only)- fetches data from Wikipedia API */
if(apiContainer){
apiContainer.textContent = "Press the button to generate a fact.";
}

/* list of programming languages used to fetch facts */
const languages = [
"Python_(programming_language)",
"Java_(programming_language)",
"JavaScript",
"C_(programming_language)",
"C%2B%2B",
"Rust_(programming_language)",
"Go_(programming_language)",
"Swift_(programming_language)",
"Kotlin_(programming_language)",
"TypeScript"
];

/* store shown facts to avoid duplicates */
let shownFacts = new Set();

/* function triggered by button */
function loadFact(){
apiContainer.textContent = "Loading programming fact...";

/* slight delay for loading effect */
setTimeout(() => fetchFact(0), 900);
}

/* fetch fact from Wikipedia */
function fetchFact(attempt){

if(attempt > 10){
apiContainer.textContent =
"Sorry, we couldn't load a new programming fact. Please try again.";
return;
}

/* select random language */
const randomLang =
languages[Math.floor(Math.random() * languages.length)];

fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${randomLang}`)
.then(response => {
if(!response.ok){
throw new Error("API failed");
}
return response.json();
})

.then(data => {
/* extract first sentence only */
const fact = data.extract.split(". ")[0] + ".";

/* avoid showing same fact */
if(shownFacts.has(fact)){
fetchFact(attempt + 1);
return;
}

shownFacts.add(fact);
apiContainer.textContent = fact;
})

.catch(() => {
apiContainer.textContent =
"Sorry, we couldn't load a programming fact. Please try again.";
});
}

/* connect button to fact loader */
if(factButton){
factButton.addEventListener("click", loadFact);
}});
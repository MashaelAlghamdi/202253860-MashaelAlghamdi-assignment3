document.addEventListener("DOMContentLoaded", () => {

/* ── SELECT DOM ELEMENTS ─────────────────────────────── */
const body        = document.body;
const toggleBtn   = document.getElementById("theme-toggle");
const greeting    = document.getElementById("dynamic-greeting");
const searchInput = document.getElementById("project-search");
const sortSelect  = document.getElementById("project-sort");
const cards       = document.querySelectorAll(".project-card");
const titles      = document.querySelectorAll(".project-title");
const container   = document.querySelector(".projects-wrapper");
const form        = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const apiContainer= document.getElementById("api-data");
const factButton  = document.getElementById("fact-btn");
const factLoader  = document.getElementById("fact-loader");
const visitTimer  = document.getElementById("visit-timer");
const emptyMsg    = document.getElementById("empty-message");


/* ── 1. DARK MODE ─────────────────────────────────────── */
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    body.classList.add("dark");
    if(toggleBtn) toggleBtn.textContent = "☀️";
}

if(toggleBtn){
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}


/* ── 2. GREETING ─────────────────────────────────────── */
if(greeting){
    const hour = new Date().getHours();
    let message = "";

    if(hour < 12) message = "Good Morning 👋🏻";
    else if(hour < 18) message = "Good Afternoon 👋🏻";
    else message = "Good Evening 👋🏻";

    greeting.textContent = message;

    setTimeout(()=>{ greeting.style.opacity = "1"; }, 200);
    setTimeout(()=>{ greeting.style.opacity = "0"; }, 2500);
}


/* ── 3. VISIT TIMER ───────────────────────────────────── */
if(visitTimer){
    let seconds = 0;

    setInterval(() => {
        seconds++;

        if(seconds < 60){
            visitTimer.textContent = seconds + "s";
        }else{
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;
            visitTimer.textContent = m + "m " + s + "s";
        }
    }, 1000);
}


/* ── 4. PROJECT SEARCH ────────────────────────────────── */
if(searchInput && emptyMsg){
    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(value)){
                card.style.display = "flex";
                visibleCount++;
            }else{
                card.style.display = "none";
            }
        });

        emptyMsg.style.display = visibleCount === 0 ? "block" : "none";
    });
}


/* ── 5. SORT PROJECTS ─────────────────────────────────── */
if(sortSelect && container){
    sortSelect.addEventListener("change", () => {

        const arr = [...cards];

        arr.sort((a,b) => {
            const A = a.querySelector("h3").textContent.toLowerCase();
            const B = b.querySelector("h3").textContent.toLowerCase();

            if(sortSelect.value === "az") return A.localeCompare(B);
            if(sortSelect.value === "za") return B.localeCompare(A);

            return parseInt(a.dataset.index) - parseInt(b.dataset.index);
        });

        arr.forEach(card => container.appendChild(card));
    });

    cards.forEach((card, i) => { card.dataset.index = i; });
}


/* ── 6. PROJECT ACCORDION ─────────────────────────────── */
titles.forEach(title => {
    title.addEventListener("click", () => {

        const card = title.closest(".project-card");
        const desc = card.querySelector(".project-description");

        document.querySelectorAll(".project-card.open").forEach(other => {
            if(other !== card){
                other.classList.remove("open");
                const d = other.querySelector(".project-description");
                if(d) d.style.maxHeight = null;
            }
        });

        card.classList.toggle("open");

        if(card.classList.contains("open")){
            desc.style.maxHeight = desc.scrollHeight + "px";
        }else{
            desc.style.maxHeight = null;
        }
    });
});


/* ── 7. CONTACT FORM ─────────────────────────────────── */
if(form && formMessage){
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nameField  = form.querySelector("input[name='name']");
        const emailField = form.querySelector("input[name='email']");
        const msgField   = form.querySelector("textarea[name='message']");

        formMessage.textContent = "";

        if(!nameField.value.trim() || !emailField.value.trim() || !msgField.value.trim()){
            formMessage.style.color = "#e53935";
            formMessage.textContent = "⚠ Please fill in all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(emailField.value.trim())){
            formMessage.style.color = "#e53935";
            formMessage.textContent = "⚠ Please enter a valid email address.";
            return;
        }

        formMessage.style.color = "#16a34a";
        formMessage.textContent = "✓ Message sent successfully!";
        form.reset();

        setTimeout(() => { formMessage.textContent = ""; }, 3000);
    });
}


/* ── 8. API ───────────────────────────────────────────── */
if(apiContainer){
    apiContainer.textContent = "Press the button to generate a fact.";
}

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
"TypeScript",
"Ruby_(programming_language)",
"PHP"
];

let shownFacts = new Set();

function loadFact(){
    if(!factButton) return;

    apiContainer.style.opacity = "0.4";

    if(factLoader) factLoader.classList.add("active");
    factButton.disabled = true;

    setTimeout(() => fetchFact(0), 600);
}

function fetchFact(attempt){
    if(attempt > 12){
        showFactResult("Sorry, we couldn't load a new fact. Please try again.");
        return;
    }

    const randomLang = languages[Math.floor(Math.random() * languages.length)];

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${randomLang}`)
    .then(response => {
        if(!response.ok) throw new Error("API failed");
        return response.json();
    })
    .then(data => {
        const fact = data.extract.split(". ")[0] + ".";

        if(shownFacts.has(fact)){
            fetchFact(attempt + 1);
            return;
        }

        shownFacts.add(fact);
        showFactResult(fact);
    })
    .catch(() => {
        showFactResult("Sorry, we couldn't connect to the API. Please try again.");
    });
}

function showFactResult(text){
    apiContainer.textContent = text;
    apiContainer.style.opacity = "1";

    if(factLoader) factLoader.classList.remove("active");
    if(factButton) factButton.disabled = false;
}

if(factButton){
    factButton.addEventListener("click", loadFact);
}


/* ── 9. SCROLL REVEAL ─────────────────────────────────── */
const revealEls = document.querySelectorAll(
".project-card, .fact-box, #about, #contact .narrow"
);

revealEls.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

revealEls.forEach(el => observer.observe(el));

});
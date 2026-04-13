# Mashael Alghamdi — Portfolio Website
### Assignment 3 | SWE363 Web Development

This is a personal portfolio website built using only HTML, CSS, and JavaScript (no frameworks).  
It showcases my Computer Science projects and demonstrates important web development concepts like API usage, state management, logic handling, and performance optimization.

---

## 📁 Project Structure

id-name-assignment3/
├── README.md  
├── index.html  
├── css/  
│   └── styles.css  
├── js/  
│   └── script.js  
├── assets/  
│   └── images/  
│       ├── project1.jpg  
│       ├── project2.jpg  
│       ├── project3.jpg  
│       └── project4.jpg  
├── docs/  
│   ├── ai-usage-report.md  
│   └── technical-documentation.md  
└── .gitignore  

---

## ✨ Features

### API Integration
- Fetches random programming facts from the Wikipedia REST API  
- Displays a short one-sentence fact when the button is clicked  
- Shows a loading spinner while fetching data  
- Displays an error message if something goes wrong  
- Prevents repeating the same fact using a Set  

---

### Complex Logic
- **Search**: Filters project cards instantly while typing  
- **Sort**: Sorts projects A→Z or Z→A and can restore original order  
- **Accordion (Expand/Collapse)**: Clicking a project shows details, and only one project can be open at a time  
- **Form Validation**:  
  - Checks all fields are filled  
  - Validates email using regex  
  - Resets form after successful submission  

---

### State Management
- **Dark/Light Mode**: Saves user preference using localStorage  
- **Visit Timer**: Shows how long the user stays on the page  
- **Dynamic Greeting**: Shows greeting based on time (morning/afternoon/evening)  
- **Accordion State**: Keeps track of which project is open  

---

### Performance
- Images use `loading="lazy"` to load only when needed  
- CSS uses `min()` and `clamp()` for responsive sizing  
- `IntersectionObserver` is used for animations instead of scroll events  
- Google Fonts use `preconnect` to load faster  
- No external libraries — pure HTML, CSS, and JavaScript  

---

## 🚀 Setup Instructions

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_ID-YOUR_NAME-assignment3.git
cd YOUR_ID-YOUR_NAME-assignment3
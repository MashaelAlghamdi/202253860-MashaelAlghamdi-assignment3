# Technical Documentation 
### Assignment 3 — SWE363 Web Development


## 1. Project Overview

This project is a static personal portfolio website.  
It is built using only:
- HTML5
- CSS3
- JavaScript (ES6+)

There are:
- No frameworks
- No backend
- No build tools

The website:
- Works on all screen sizes (responsive)
- Supports both light mode and dark mode

---

## 2. File Structure

id-name-assignment3/
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
├── README.md               
└── .gitignore             

---

## 3. HTML Structure (index.html)

The page is divided into clear sections:

| Section | Purpose |
|--------|--------|
| Navigation | Top bar with links and theme toggle |
| Mobile Menu | Appears when clicking hamburger icon |
| Hero | Main introduction (name, greeting, stats) |
| About | Personal info and skills |
| Projects | Shows projects with search and sort |
| Tech Facts | Displays facts from Wikipedia API |
| Contact | Form with validation |
| Footer | Bottom section |

### Accessibility
- All images have alt text  
- Inputs have labels  
- Buttons include aria-label when needed  
- Form messages use role="alert"  

---

## 4. CSS Architecture (styles.css)

### CSS Variables
All design values (colors, spacing, fonts) are stored as variables in :root.

Dark mode works by overriding these variables inside:
body.dark { ... }

This avoids repeating styles.

---

### Typography
- Headings → DM Serif Display  
- Body text → DM Sans  
- Uses clamp() so text scales automatically  

---

### Animations
- Uses CSS transitions for hover effects  
- Keyframe animations for hero section  
- Scroll animations are triggered using JavaScript (IntersectionObserver)  
- JavaScript is NOT used for animations that CSS can handle  

---

### Responsive Design
- Breakpoint at 900px (tablet/mobile)
- Breakpoint at 500px (small screens)
- Projects go from 3 columns → 1 column on mobile
- Navbar links are hidden on mobile and replaced with a hamburger menu  

---

## 5. JavaScript Functionality (script.js)

### 5.1 Theme Toggle
- Reads saved theme from localStorage
- Toggles dark mode when button is clicked
- Saves preference again

---

### 5.2 Dynamic Greeting
- Uses current time (new Date().getHours())
- Displays greeting like "Good Morning"

---

### 5.3 Visit Timer
- Runs every second using setInterval
- Shows time like:
  - Seconds → Xs
  - Minutes + seconds → Xm Xs

---

### 5.4 Navbar Scroll Effect
- Listens to scroll event
- Adds .scrolled class when scrolling down
- Applies blur effect using backdrop-filter

---

### 5.5 Project Search
- Runs when user types in search input
- Checks if project title includes typed text
- Hides non-matching projects
- Shows message if no results found  

---

### 5.6 Project Sort
- Triggered when dropdown changes
- Converts project cards into array
- Sorts using .localeCompare()
- Reorders them on the page
- Can restore original order  

---

### 5.7 Accordion (Expand/Collapse)
- Clicking project title:
  1. Closes other open projects
  2. Opens clicked project
  3. Uses max-height for smooth animation  

---

### 5.8 Contact Form Validation
On submit:
1. Check fields are not empty  
2. Validate email using regex  
3. Show message:
   - Red → error  
   - Green → success  
4. Reset form after success  
5. Message disappears after 4 seconds  

---

### 5.9 Wikipedia API Integration

API URL:
https://en.wikipedia.org/api/rest_v1/page/summary/{article}

Steps:
- Pick random programming language  
- Fetch summary  
- Show first sentence  

Uses:
- Set to avoid repeated facts  
- Retry up to 12 times if duplicate  
- .catch() for errors  
- Loading spinner while fetching  

---

### 5.10 Scroll Reveal Animation
- Uses IntersectionObserver
- When element appears:
  - Add .visible class
- Animation uses:
  - opacity
  - translateY
- Stops observing after showing (better performance)

---

## 6. API Documentation

Wikipedia REST API

Base URL:
https://en.wikipedia.org/api/rest_v1/

Endpoint:
GET /page/summary/{title}

Data used:
- extract → article summary  

No authentication required  
Works directly in browser (CORS enabled)  

---

## 7. Browser Compatibility

Supported in modern browsers:

| Feature | Support |
|--------|--------|
| CSS Variables | All modern browsers |
| backdrop-filter | Supported |
| IntersectionObserver | Supported |
| color-mix() | Modern browsers only |
| clamp() | Supported |
| Fetch API | Supported |

---

## 8. Performance Optimizations

- Images use loading="lazy"  
- Fonts use preconnect  
- Scroll animations use IntersectionObserver  
- No external libraries (faster load)  
- CSS animations use transform and opacity  
- DOM elements are selected once and reused  

---

## 9. Known Limitations

- Contact form does not send real emails (no backend)  
- Wikipedia API may be slow sometimes  
- color-mix() may not work on older browsers  
# Assignment 3️ – Advanced Functionality

## Project Description  

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript (no frameworks). It extends previous assignments by introducing more advanced functionality, improved interactivity, and better performance practices.

The website showcases my major projects through an interactive interface where users can search, sort, and explore project details dynamically. It also integrates an external API (Wikipedia REST API) to fetch random programming facts, adding a dynamic and data-driven element to the application.

Several advanced features were implemented, including real-time project filtering, sorting options, expandable project descriptions, and a contact form with validation. The application also demonstrates state management through features like dark/light mode persistence using `localStorage`, a dynamic greeting based on time, and a visit duration timer.

In addition, performance optimization techniques were applied, such as lazy loading images, efficient DOM handling, and using `IntersectionObserver` for animations, ensuring a smooth and responsive user experience.

---

## Features  

### API Integration  
- Fetches random programming facts from the Wikipedia REST API  
- Displays a short one-sentence fact when the button is clicked  
- Shows a loading spinner while fetching data  
- Displays an error message if something goes wrong  
- Prevents repeating the same fact using a Set  

---

### Complex Logic  
- **Search**: Filters project cards instantly while typing  
- **Sort**: Sorts projects A→Z or Z→A and restores original order  
- **Accordion**: Expands project details while keeping only one open  
- **Form Validation**:  
  - Ensures all fields are filled  
  - Prevents inputs with only spaces using `.trim()`  
  - Validates email format using regex  
  - Displays clear error messages  
  - Resets form after successful submission  

---

### State Management  
- **Dark/Light Mode** with `localStorage` persistence  
- **Visit Timer** showing time spent on the page  
- **Dynamic Greeting** based on time of day  
- **Accordion State Tracking**  

---

### Performance  
- Lazy loading images using `loading="lazy"`  
- Efficient animations using `IntersectionObserver` instead of scroll events  
- Responsive design using `clamp()` and `min()`  
- Optimized font loading using `preconnect`  
- Reduced unnecessary DOM queries by caching elements  
- No external libraries (pure JavaScript implementation)  

---

## Setup Instructions

To run this project locally:

1. Clone the repository

```bash
git clone https://github.com/MashaelAlghamdi/202253860-MashaelAlghamdi-Assignment3.git
```

2. Navigate to the project folder

```bash
cd 202253860-MashaelAlghamdi-Assignment3
```

3. Open the project

Since this is a static website built using **HTML, CSS, and JavaScript**, no additional installation is required.

You can open the project using one of the following methods.

**Option 1 – Open directly in your browser**

Open the `index.html` file in your browser.

**Option 2 – Using VS Code Live Server**

* Open the project folder in **Visual Studio Code**
* Install the **Live Server** extension
* Right-click `index.html`
* Select **Open with Live Server**

4. View the website


## Short Summary of AI Use
AI tools including Claude, ChatGPT, and GitHub Copilot were used as development assistants throughout this project for code generation, debugging, and improving code quality.

Claude was mainly used for generating ideas and solving specific problems, such as designing the Wikipedia API logic and improving the contact form validation. It also helped identify issues like handling inputs with only spaces, which I fixed using .trim(), and suggested improvements for layout and performance.

ChatGPT was used to better understand JavaScript concepts and logic, such as how search filtering and validation work. This helped ensure full understanding of the implementation before finalizing the code. It was also used to assist in improving the clarity, structure, and organization of the project documentation.

GitHub Copilot was used inside VS Code to assist with code completion and repetitive CSS patterns, especially for dark mode styling. All suggestions were reviewed and adjusted when necessary.

All AI-generated content was carefully reviewed, tested, and modified. I ensured that I fully understood every part before including it, and I adapted the code to match my project structure and requirements.

A more detailed explanation of how AI was used is provided in:
`docs/ai-usage-report.md`
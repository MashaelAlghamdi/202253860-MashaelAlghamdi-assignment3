# Technical Documentation

---

## 1. Project Overview

This project is a static personal portfolio website built using:

* HTML5
* CSS3
* JavaScript 

It does not use any frameworks or backend services. The goal is to demonstrate advanced front-end development skills including interactivity, state management, API integration, and performance optimization.

The website is fully responsive and supports both light and dark themes.

---

## 2. Technologies Used

### HTML

Provides the structure of the website and organizes content into clear sections such as navigation, hero, projects, and contact.

### CSS

Handles layout, styling, animations, and responsive design. Includes:

* Flexbox layouts
* Responsive media queries
* Transitions and animations
* Dark mode styling

### JavaScript

Implements all interactive features including logic handling, state management, and API integration.

### External API

* Wikipedia REST API for dynamic programming facts

---

## 3. Website Structure

| Section    | Description                     |
| ---------- | ------------------------------- |
| Navigation | Links + theme toggle            |
| Hero       | Introduction + greeting + timer |
| Tech Facts | API integration                 |
| About      | Personal info                   |
| Projects   | Interactive project system      |
| Contact    | Form validation                 |

---

## 4. User Interaction Flow (Step-by-Step Guide)

### 1. Landing Experience

* User sees hero section
* Dynamic greeting appears based on time
* Visit timer starts automatically

---

### 2. Navigation

* User clicks navbar links
* Smooth scroll to sections

---

### 3. Projects Section (Main Interaction Area)

#### Search (Real-time Filtering)

* User types in search bar
* Projects update instantly
* Case-insensitive matching
* If no results → message appears

---

#### Sorting

* User selects:

  * Default
  * A → Z
  * Z → A
* Projects reorder dynamically

---

#### Accordion (Expand/Collapse)

* Clicking a project:

  * Opens description
  * Closes other projects
* Uses smooth animation

---

### 4. API Feature (Tech Facts)

* User clicks "Generate Fact"
* Loading spinner appears
* Fact is fetched from API
* Duplicate facts are avoided using a Set
* Retries automatically if duplicate
* Error message shown if request fails

---

### 5. Contact Form

* User fills form

Validation includes:

* Required fields check
* `.trim()` prevents empty spaces
* Email validation using regex
* Error or success message displayed
* Form resets after success

---

### 6. Theme Toggle (State Management)

* User switches between light/dark mode
* Preference stored in `localStorage`
* Theme persists after refresh

---

### 7. Additional Dynamic Features

* **Visit Timer** updates every second
* **Dynamic Greeting** based on time of day
* **Scroll Reveal Animations** when elements enter viewport

---

## 5. JavaScript Features Implementation

### Initialization

```javascript
document.addEventListener("DOMContentLoaded")
```

---

### Implemented Features

#### 1. Dark Mode

* Uses `localStorage`
* Toggles `dark` class

#### 2. Dynamic Greeting

* Uses `Date().getHours()`
* Displays morning/afternoon/evening

#### 3. Visit Timer

* Uses `setInterval`
* Displays seconds and minutes

#### 4. Search

* Uses `.includes()`
* Filters DOM elements

#### 5. Sorting

* Uses `.localeCompare()`
* Reorders DOM dynamically

#### 6. Accordion

* Uses `max-height` animation
* Only one open at a time

#### 7. Form Validation

* `.trim()` for empty inputs
* Regex for email
* Dynamic feedback messages

#### 8. API Integration

* Fetch request to Wikipedia API
* Uses retry logic (max attempts)
* Prevents duplicates with `Set`
* Error handling using `.catch()`

#### 9. Scroll Animations

* Uses `IntersectionObserver`
* Adds `.visible` class
* Stops observing after trigger

---

## 6. CSS Architecture

### Theming

* Uses:

```css
body.dark { ... }
```

### Responsive Design

* Uses media queries:

```css
@media(max-width:768px)
```

### Animations

* Uses `transform` and `opacity`
* Avoids heavy JS animations

---

## 7. Performance Optimizations

* Lazy loading images
* IntersectionObserver instead of scroll events
* Cached DOM elements
* No external libraries
* Efficient CSS transitions
* Reduced unnecessary reflows

---

## 8. Browser Compatibility

Supported in modern browsers:

* CSS Variables
* Fetch API
* IntersectionObserver
* clamp()

---

## 9. Known Limitations

* No backend (form is front-end only)
* API may fail occasionally
* Some modern CSS features have limited support

---

## 10. Summary

This project demonstrates:

* Advanced UI interaction
* State management
* API integration
* Performance optimization

It focuses on building a clean, interactive, and user-friendly experience using only core web technologies.

---

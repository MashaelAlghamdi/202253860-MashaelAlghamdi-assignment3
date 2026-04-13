# AI Usage Report

---

## 1. AI Tools Used

The following AI tools were used during the development of this project:

* **Claude**
* **ChatGPT**
* **GitHub Copilot (VS Code)**

These tools were used as supporting assistants to help with debugging, understanding concepts, improving code quality, and refining implementation details.

---

## 2. How AI Was Used

AI tools were used throughout different stages of development to assist with problem-solving and improving the overall quality of the project.

* **Claude** – Used for deeper problem-solving and code improvement. It helped design the Wikipedia API logic, including handling repeated facts and retry mechanisms. It also assisted in debugging layout issues (such as fixing mobile grid layout) and reviewing form validation logic. Based on its feedback, I improved input validation by handling empty spaces using `.trim()` and optimized DOM usage.

* **ChatGPT** – Used mainly for understanding JavaScript concepts and logic. It helped clarify how features such as search filtering, event handling, and validation work, ensuring that I fully understood the implementation before applying it. It was also used to assist in improving the clarity, structure, and organization of the project documentation.

* **GitHub Copilot** – Used inside VS Code to assist with real-time code completion and repetitive patterns, especially in CSS (e.g., dark mode styling). Suggestions were always reviewed and adjusted before use.

Overall, Claude was used more for **analysis and debugging**, ChatGPT for **understanding concepts**, and Copilot for **speeding up coding**.

---

## 3. Benefits of Using AI

Using AI tools improved both development efficiency and code quality.

Key benefits include:

* **Faster Debugging** – Issues like layout breaking and accordion behavior were identified quickly.
* **Improved Code Quality** – Suggestions such as avoiding repeated DOM queries helped optimize performance.
* **Better Accuracy** – Copilot reduced syntax errors and repetitive mistakes.
* **Stronger Understanding** – ChatGPT explanations helped me understand logic instead of just copying solutions.
* **UI/UX Improvements** – AI suggested better interaction patterns (e.g., smoother accordion behavior).
* **Documentation Support** – AI tools were used to improve the clarity, structure, and organization of written documentation. They helped refine explanations, ensure consistency between files (README and technical documentation), and present technical concepts in a clearer and more professional way.


---

## 4. Challenges and Limitations

While AI was helpful, there were several challenges that required careful handling:

* **Over-General Solutions** – Claude sometimes suggested solutions that did not fit the project (e.g., backend-related ideas for a static website).
* **Compatibility Issues** – Copilot occasionally suggested CSS features (like `color-mix()`) that are not fully supported across browsers.
* **Lack of Context Memory** – Claude required re-sending code multiple times, which slowed down the workflow.
* **Need for Verification** – Some AI suggestions were partially correct and required testing and modification before use.
* **Risk of Blind Usage** – Without careful review, AI suggestions could introduce incorrect logic or unnecessary complexity.

These challenges highlight the importance of **critical thinking and validation when using AI tools**.

---

## 5. Learning Outcomes

Using AI tools in this project helped strengthen both technical and problem-solving skills.

Key learning outcomes include:

* Understanding how to use the **IntersectionObserver API** for efficient animations instead of scroll events.
* Learning how to use **CSS `clamp()` and `min()`** for responsive design without excessive media queries.
* Improving knowledge of **API handling**, including fetching data, handling errors, and avoiding repeated results.
* Gaining deeper understanding of **regex validation** for email inputs.
* Learning how to **optimize performance** by reducing unnecessary DOM queries.
* Developing a better workflow by using AI as a **support tool rather than a solution provider**.

---

## 6. Responsible Use and Modifications

All AI-generated suggestions were carefully reviewed before being integrated into the project.

Any code suggested by AI tools was tested locally and modified where necessary to ensure that it worked correctly and matched the intended functionality.

The final implementation reflects personal understanding of the code and its behavior.

AI was used as a learning assistant rather than a direct replacement for the development process.

---

## 7. Innovative Use of AI

AI was used not only for coding assistance but also as a **decision-support tool**.

* Explored different approaches for API handling and UI behavior before selecting the final implementation.
* Improved performance by applying AI suggestions such as caching DOM elements.
* Enhanced user experience by refining interactions like accordion animations and validation feedback.

This allowed me to focus more on **design quality, performance, and usability**, rather than just basic implementation.

---

## 8. Summary

AI tools (Claude, ChatGPT, and GitHub Copilot) were used effectively to assist with development, debugging, and learning.

All outputs were carefully reviewed, tested, and modified. The final implementation reflects my own understanding and decisions, with AI serving as a support tool rather than a replacement for development.

---

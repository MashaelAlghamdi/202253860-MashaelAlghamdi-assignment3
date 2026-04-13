# AI Usage Report 
### Assignment 3 — SWE363 Web Development


## 1. Tools Used & Use Cases

### Claude 
**Use Cases:**
- **Code Generation**: I asked Claude to help me design the Wikipedia API function, especially how to retry if a fact is repeated. I did not copy the code directly — I modified it and built my own `fetchFact(attempt)` function with proper error handling and UI behavior.
- **Debugging**: I used Claude to fix a CSS issue where the project cards layout broke on mobile. It suggested using `grid-template-columns: 1fr` inside a media query, and it worked after testing.
- **Code Review**: I shared my JavaScript code with Claude to review the contact form validation. It pointed out that users could enter only spaces. I fixed this by adding `.trim()` to the inputs.

---

### ChatGPT 
**Use Cases:**
- **Validation Support**: ChatGPT helped explain how some parts of my JavaScript logic work (like search behavior and form validation), which improved my understanding before finalizing the code.

---

### GitHub Copilot (VS Code)
**Use Cases:**
- **Code Completion**: I used Copilot for suggestions while writing repetitive CSS, especially for dark mode styles. I always reviewed suggestions before accepting them.
- **Comment Suggestions**: Copilot suggested comments in CSS, which I edited to match my own style.

---

## 2. Benefits & Challenges

### Benefits
- **Faster Development**: Claude helped me quickly identify issues like missing `overflow: hidden` in the accordion, saving debugging time.
- **Better Accuracy**: Copilot reduced typing mistakes, especially with CSS variables.
- **Improved Code Quality**: Claude pointed out that I was querying the DOM inside a loop, so I improved my code by caching elements.
- **Better Understanding**: ChatGPT helped simplify complex explanations, making it easier for me to fully understand my own project.

---

### Challenges
- **Over-General Suggestions**: Sometimes Claude gave solutions that didn’t fit my project, like adding backend code for a static website.
- **Need for Verification**: Some Copilot suggestions used CSS features not supported in all browsers (like `color-mix()`), so I had to check compatibility myself.
- **Context Limitations**: Claude does not remember previous chats, so I had to re-send code multiple times.
- **Careful Review Needed**: ChatGPT rewrites required checking to make sure no important details were removed or changed.

---

## 3. Learning Outcomes

- **IntersectionObserver API**: Learned how to use it for scroll animations instead of using scroll events, which improves performance.
- **CSS clamp() and min()**: Learned how to create responsive font sizes without needing many media queries.
- **API Handling**: Learned how to fetch data from an API, handle responses, and deal with errors using `.catch()`.
- **Regex Validation**: Studied the email validation regex to understand how it works and what each part means.
- **Better Workflow**: Learned to use AI tools as support tools, not as full solutions — always reviewing and understanding the output.

---

## 4. Responsible Use & Modifications

All AI-generated content was used as a starting point, not as a final solution. For every suggestion, I followed these steps:

1. **Understand the code** — I made sure I could explain every part before using it.  
2. **Test separately** — I tested new code in isolation before adding it to the project.  
3. **Modify it** — I changed the code to match my project structure and naming style.  
4. **Verify results** — I tested in different browsers and with edge cases (empty input, invalid email, etc.).  
5. **Document changes** — I added comments when I changed AI-generated code significantly.  

**Example:**  
Claude suggested using `display: none/block` for the accordion. I changed it to use `max-height` animation for a smoother effect after understanding how it works.

---

## 5. Summary

AI tools (Claude, ChatGPT, and Copilot) were used to assist in development, debugging, and documentation.  
However, all final code was reviewed, modified, and fully understood before being included in the project.

No AI-generated code was used without verification and improvement.
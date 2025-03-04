# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

Large Screen (Desktop)

![Large Screen (Desktop)](https://github.com/user-attachments/assets/d64bef08-a2a2-4b85-b27d-2005def31f75)

Medium Screen (iPad)

![Medium Screen (iPad)](https://github.com/user-attachments/assets/316218ba-2de3-4804-8886-306e530ebc3f)

Small Screen (Mobile)

![Small Screen (Mobile)](https://github.com/user-attachments/assets/94c359c7-066b-4732-8414-843feeec1675)

### Links

- [Solution URL](https://github.com/KuvashneeNaidoo/sunnyside-landing-page)
- [Live Site URL](https://kuvashnee-sunnyside-landing-page.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to build a mobile-friendly navigation menu using a hamburger icon. When clicked, the hamburger icon toggles the visibility of the menu, which is hidden by default on smaller screens. By using React’s useState hook, I implemented state management to control whether the menu is open or closed. The state determines if the navbar element has the class open, which triggers the menu to be displayed.

I also improved my skills with Flexbox and Grid by creating a responsive layout. I used Grid to manage columns and Flexbox to align and center text. Media queries helped adjust the layout for smaller screens, ensuring a seamless design on mobile devices.

```js
// State to track whether the menu is open or closed (for the hamburger menu)
const [isOpen, setIsOpen] = useState(false);

{/* Hamburger menu button that toggles the state of the menu */}
<div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
☰
</div>

{/* Navbar links that toggle the 'open' class based on the state of isOpen */}
<ul className={`navbar-links ${isOpen ? "open" : ""}`}>
```

### Continued development

For future development, I plan to implement a slider for the photo gallery, enabling users to seamlessly navigate through images in a dynamic and interactive way. This will provide an opportunity to further refine my skills in state management using useState to control the active image, as well as adding navigation buttons (next/previous) to cycle through the images.

## Author

- [Website](https://kuvashnee-naidoo-portfolio.netlify.app/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/KuvashneeNaidoo)
- [Twitter](https://x.com/kuvashnee)

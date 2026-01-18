# Dinner Menu Recommender Website

## Overview
This project creates a simple English website that showcases 10 iconic global dinner menu items. Each menu item is presented with a clickable button and a corresponding square image directly below it, sized to match the button's width. The website is designed to be visually appealing and will be deployed using GitHub Pages.

## Project Outline

### HTML (`index.html`)
-   A main `div` container (`#menu-container`) to hold all the dinner menu items.
-   Each menu item will be enclosed in its own `div` (`.menu-item`).
-   Inside each `.menu-item`, there will be a `<button>` element displaying the menu name.
-   Immediately below each button, an `<img>` tag will display the corresponding menu image.
-   The HTML will link to `style.css` for styling and `main.js` for any future interactivity.

### CSS (`style.css`)
-   **Layout:** Use CSS Grid or Flexbox for `menu-container` to arrange menu items in a responsive grid.
-   **Buttons:** Style buttons for a consistent width, padding, font, and a modern look.
-   **Images:** Images will be styled to be square (`aspect-ratio: 1/1;` or `width` and `height` set to the same value) and their width will dynamically match the width of their associated button. `object-fit: cover;` will be used to ensure images fill their container without distortion.
-   **Responsiveness:** Media queries will be implemented to ensure the layout adapts well to different screen sizes.
-   **Visual Appeal:** Basic styling for body, typography, colors, and spacing to create a clean and attractive user interface.

### JavaScript (`main.js`)
-   For this initial version, `main.js` will remain largely empty as the core request is about displaying static menu items. Future enhancements could include interactive features.

### Images
-   Ten iconic global menu items have been selected: Pizza, Burger, Sushi, Tacos, Curry, Pasta, Ramen, Fried Chicken, Steak, and Salad.
-   Commercially free-to-use JPG images for these items are already present in the `images/` directory.
-   Images will be styled purely through CSS to ensure they are square and correctly sized, eliminating the need for manual resizing of each file for the initial setup.

### Deployment
-   The website will be deployed to GitHub Pages.

## Current Plan

1.  **Create `blueprint.md`**: (Already in progress, this file)
2.  **Modify `index.html`**:
    *   Set up the basic HTML structure including `head`, `body`, linking `style.css` and `main.js`.
    *   Create the `#menu-container`.
    *   Add 10 `.menu-item` divs, each containing a `<button>` and an `<img>` tag for the selected menu items.
3.  **Modify `style.css`**:
    *   Add styling for `body`, `#menu-container`, `.menu-item`, `<button>`, and `<img>` elements to achieve the desired layout and appearance (responsive grid, square images matching button width).
4.  **Commit Changes**: Stage and commit all created and modified files to the Git repository with a descriptive commit message.
5.  **GitHub Pages Deployment Instructions**: Provide clear instructions on how to set up GitHub Pages for the repository, ensuring the image files are correctly deployed.
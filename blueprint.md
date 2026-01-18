# Dinner Menu Recommender Website

## Overview
This project creates an English website that dynamically recommends a single dinner menu item from a list of 10 iconic global cuisines, similar to a lottery number generator. Users will click a button to receive a random menu recommendation, which will display the menu's name and an associated square image.

## Project Outline

### HTML (`index.html`)
-   A `header` and `footer` will remain for site structure.
-   A main `div` (`#app-container`) will hold the interactive elements.
-   Inside `#app-container`, there will be:
    -   A prominent `<button>` (e.g., `#recommend-button`) that, when clicked, triggers a new menu recommendation.
    -   A `div` (`#menu-display`) to show the randomly selected menu item.
    -   Inside `#menu-display`, there will be an `<h2>` for the menu name and an `<img>` tag for the menu image. The image will be styled to be square and responsive.

### CSS (`style.css`)
-   **General Styling:** Basic body, header, and footer styling will be retained.
-   **Layout:** `#app-container` will center its content.
-   **Recommendation Button:** The `#recommend-button` will be styled to be prominent and user-friendly.
-   **Menu Display Area:** `#menu-display` will be styled to clearly present the recommended menu name and image.
-   **Image Styling:** The image within `#menu-display` will be styled to be square (`aspect-ratio: 1/1;`) and responsive, fitting within its container using `object-fit: cover;`.
-   **Responsiveness:** Media queries will ensure the layout and elements adapt to various screen sizes.

### JavaScript (`main.js`)
-   An array of JavaScript objects will store the 10 global menu items, each with a `name` and `image` path.
-   An event listener will be attached to the `#recommend-button`.
-   Upon button click:
    -   A random menu item will be selected from the array.
    -   The `<h2>` and `<img>` elements within `#menu-display` will be updated with the selected menu's name and image.
    -   (Optional: Add a simple animation or transition for the new menu item display.)

### Images
-   Ten iconic global menu items have been selected: Pizza, Burger, Sushi, Tacos, Curry, Pasta, Ramen, Fried Chicken, Steak, and Salad.
-   Commercially free-to-use JPG images for these items are already present in the `images/` directory.
-   Images will be styled purely through CSS to ensure they are square and correctly sized, eliminating the need for manual resizing of each file for the initial setup.

### Deployment
-   The website will be deployed to GitHub Pages.

## Current Plan

1.  **Update `blueprint.md`**: (Already in progress, this file)
2.  **Modify `index.html`**:
    *   Remove the previous static `#menu-container` with all 10 items.
    *   Add a prominent "Recommend Dinner" button (`#recommend-button`).
    *   Add a `div` (`#menu-display`) to show the recommended menu item (initially empty or with a placeholder).
3.  **Modify `style.css`**:
    *   Adjust styles for the new `#app-container`, `#recommend-button`, and `#menu-display` to ensure a clean, centered layout and proper image display.
    *   Remove old `#menu-container` specific styles.
4.  **Create `main.js`**:
    *   Define the array of menu item objects.
    *   Implement the random selection and display update logic on button click.
5.  **Commit Changes**: Stage and commit all modified files to the Git repository with a descriptive commit message.
6.  **GitHub Pages Deployment Instructions**: (These remain the same as previously documented, but the user will need to push the new changes).

---

## Deployment to GitHub Pages Instructions:

To deploy this website to GitHub Pages, please follow these steps:

1.  **Create a New GitHub Repository:**
    *   Go to [GitHub](https://github.com/) and log in to your account.
    *   Click on the "+" icon in the top right corner and select "New repository".
    *   Give your repository a name (e.g., `dinner-menu-recommender`). Make sure it is a **public** repository.
    *   Do **NOT** initialize the repository with a README, `.gitignore`, or license.

2.  **Push Your Local Code to GitHub:**
    *   Open your terminal or command prompt in the `hs1week` project directory.
    *   Add your new GitHub repository as a remote (if you haven't already):
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
        ```
        (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.)
    *   Push your local `main` branch to GitHub:
        ```bash
        git push -u origin main
        ```
    *   If you encounter any issues, you might need to pull first if GitHub initialized something, but since we asked not to, this should push directly.

3.  **Enable GitHub Pages:**
    *   Once your code is pushed, go to your repository on GitHub (e.g., `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME`).
    *   Click on the "Settings" tab.
    *   In the left sidebar, click on "Pages".
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   For "Branch", select `main` (or `gh-pages` if you set that up) and then select `/ (root)` for the folder.
    *   Click "Save".

4.  **Verify Deployment:**
    *   After saving, GitHub Pages will take a few minutes to build and deploy your site.
    *   Refresh the "Pages" section in your repository settings. You should see a message indicating "Your site is live at <URL>".
    *   Click on the provided URL (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`) to view your live website.
    *   **Crucially, verify that all images are loading correctly.** If images are broken, double-check their paths in `index.html` and ensure the `images/` folder and its contents were pushed to GitHub.
# Dinner Menu Recommender Website

## Overview
This project creates an English website that dynamically recommends a single dinner menu item from a list of 10 iconic global cuisines, similar to a lottery number generator. Users will click a button to receive a random menu recommendation, which will display the menu's name and an associated square image.

## Project Outline

### HTML (`index.html`)
-   A `header` and `footer` will remain for site structure.
-   A main `div` (`#app-container`) will hold the interactive elements.
-   Inside `#app-container`, there will be:
    -   A prominent `<button>` (e.g., `#recommend-button`) that, when clicked, triggers a new menu recommendation.
    -   A `div` (`#menu-display`) to show the randomly selected menu item. Initially empty.
    -   Inside `#menu-display`, there will be an `<h2>` for the menu name and an `<img>` tag for the menu image, dynamically added by JavaScript.

### CSS (`style.css`)
-   **General Styling:** Basic body, header, and footer styling will be retained.
-   **Layout:** `#app-container` will center its content.
-   **Recommendation Button:** The `#recommend-button` will be styled to be prominent and user-friendly.
-   **Menu Display Area:** `#menu-display` will be styled to clearly present the recommended menu name and image. It includes a `transition` property for smooth fade-in/out effects, but the initial hidden state (`opacity: 0; transform: translateY(20px);`) is now controlled by JavaScript.
-   **Image Styling:** The image within `#menu-display` will be styled to be square (`aspect-ratio: 1/1;`) and responsive, fitting within its container using `object-fit: cover;`.
-   **Responsiveness:** Media queries will ensure the layout and elements adapt to various screen sizes.

### JavaScript (`main.js`)
-   *(Debugging Version)*: The `main.js` has been simplified for debugging purposes.
    -   It now primarily checks if `recommendButton` and `menuDisplay` elements are correctly found by their IDs.
    -   If found, it displays an initial static message in `#menu-display` on page load.
    -   Clicking the `#recommend-button` will replace the content of `#menu-display` with a different static "Test Recommendation!" message.
    -   If essential elements are not found, a prominent error message will be injected directly into the `document.body`.
    -   All dynamic menu item generation, image loading, and animation logic have been temporarily removed to isolate the issue of the button not appearing to function.

### Images
-   Ten iconic global menu items have been selected: Pizza, Burger, Sushi, Tacos, Curry, Pasta, Ramen, Fried Chicken, Steak, and Salad.
-   Commercially free-to-use JPG images for these items are already present in the `images/` directory.
-   Images will be styled purely through CSS to ensure they are square and correctly sized, eliminating the need for manual resizing of each file for the initial setup.

### Deployment
-   The website will be deployed to GitHub Pages.

## Current Plan

1.  **Update `blueprint.md`**: (Already in progress, this file)
2.  **Modify `main.js`**: Replaced with a simplified debugging version to confirm basic JavaScript execution and element interaction.
3.  **Commit Changes**: Stage and commit all modified files to the Git repository with a descriptive commit message.
4.  **GitHub Pages Deployment Instructions**: (These remain the same as previously documented, but the user will need to push the new changes).

---

## Deployment to GitHub Pages Instructions:

All necessary code modifications (for debugging) have been completed and committed to your local Git repository. To get your dynamic dinner menu recommender website live, please proceed with the deployment steps below:

1.  **Create a New GitHub Repository:**
    *   Go to [GitHub](https://github.com/) and log in to your account.
    *   Click on the "+" icon in the top right corner and select "New repository".
    *   Give your repository a name (e.g., `dinner-menu-recommender`). Make sure it is a **public** repository.
    *   Do **NOT** initialize the repository with a README, `.gitignore`, or license.

2.  **Push Your Local Code to GitHub:**
    *   Open your terminal or command prompt in the `hs1week` project directory.
    *   Add your new GitHub repository as a remote (if you haven't already from previous steps):
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

4.  **Verify Deployment and Report Back:**
    *   After saving, GitHub Pages will take a few minutes to build and deploy your site.
    *   Refresh the "Pages" section in your repository settings. You should see a message indicating "Your site is live at <URL>".
    *   Click on the provided URL (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`) to view your live website.
    *   **REPORT BACK:**
        *   **On page load, do you see the message "Script loaded. Ready to test recommendations!" inside the white box?**
        *   **When you click the "Recommend Dinner" button, does the text inside the white box change to "Test Recommendation! If you see this, the button click works!"?**
        *   **Do you see any red "ERROR: Essential elements..." message on the page?**

    Your answers to these questions are crucial for diagnosing the problem further.
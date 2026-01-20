# Lunch Menu Generator

## Overview

A simple web application that randomly generates a lunch menu suggestion from a predefined list. It also includes an affiliate inquiry form using Formspree and a Disqus comment section.

## Detailed Outline of the Project

*   **Project Type**: Web application (HTML, CSS, JavaScript)
*   **Core Functionality**:
    *   Random lunch menu generator.
    *   Affiliate inquiry form using Formspree.
    *   Disqus comment section.
*   **Menu Items**: The menu will include 'chickensalad', 'hamburger', 'kimbap', 'pasta', and 'pizza'.
*   **Display**: Both the menu name and its corresponding image will be displayed simultaneously.
*   **User Interaction**:
    *   A button click will trigger the generation and display of a new random menu item.
    *   The affiliate form allows users to submit inquiries via Formspree.
    *   Users can leave comments via the integrated Disqus comment section.
*   **Deployment**: The website will be deployed directly to GitHub Pages.

## Features

*   Displays a "Generate Menu" button.
*   When the button is clicked, a random lunch menu item is displayed with its corresponding image.
*   The list of menu items is: Chicken Salad, Hamburger, Kimbap, Pasta, and Pizza.
*   Includes an "Affiliate Inquiry" form with fields for Name, Email, and Message, submitting data to Formspree.
*   Integrates a Disqus comment section at the bottom of the page for user interaction.

## File Structure

*   `index.html`: The main HTML file. It will contain the basic page structure, including a button and placeholders for the menu name and image, the affiliate inquiry form, and the Disqus comment section.
*   `main.js`: Contains the JavaScript logic for generating random menu items and updating the display.
*   `style.css`: Contains the CSS for styling the page, including styles for the lunch menu generator, the affiliate inquiry form, and general page layout.
*   `images/`: Contains the images for the menu items (`chickensalad.jpg`, `hamburger.jpg`, `kimbap.jpg`, `pasta.jpg`, `pizza.jpg`).

## GitHub Pages Deployment Instructions

To deploy your project directly to GitHub Pages, please follow these manual steps:

1.  **Commit your changes**: Ensure all your project files (including `index.html`, `style.css`, `main.js`, and the `images/` folder) are committed to your GitHub repository.
    *   You might need to use `git add .` and `git commit -m "Initial commit for lunch menu generator"` if you haven't already.
2.  **Push to your repository**: Push your changes to the `main` or `master` branch of your `heesunjung68/lunchpop` repository.
    *   You might need to use `git push origin main` (or `master`).
3.  **Configure GitHub Pages**:
    *   Go to your `heesunjung68/lunchpop` repository on GitHub.com.
    *   Click on **Settings**.
    *   In the left sidebar, click on **Pages** (under the "Code and automation" section).
    *   Under "Build and deployment", for "Source", select **Deploy from a branch**.
    *   For "Branch", select your primary branch (e.g., `main` or `master`) and choose the `/ (root)` folder.
    *   Click **Save**.
4.  **Wait for deployment**: GitHub Pages will then build and deploy your site. This may take a few minutes. You can usually see the deployment status in the "Actions" tab of your repository.
5.  **Access your site**: Once deployed, your site will be available at a URL similar to `https://heesunjung68.github.io/lunchpop/`.
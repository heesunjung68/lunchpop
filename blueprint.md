# Lunch Menu Generator & Dog/Cat Image Classifier

## Overview

A web application that combines a random lunch menu generator, an affiliate inquiry form, a Disqus comment section, and a Dog/Cat image classifier. This site is designed with improved content and structure to enhance eligibility for platforms like Google AdSense. Users can generate random lunch suggestions, submit affiliate inquiries, engage in comments, and classify images using a pre-trained Teachable Machine model.

## Detailed Outline of the Project

*   **Project Type**: Web application (HTML, CSS, JavaScript)
*   **Core Functionality**:
    *   Random lunch menu generator.
    *   Affiliate inquiry form using Formspree.
    *   Disqus comment section.
    *   Dog/Cat image classifier using Teachable Machine.
*   **Menu Items**: The menu will include 'chickensalad', 'hamburger', 'kimbap', 'pasta', and 'pizza'.
*   **Display**: Both the menu name and its corresponding image will be displayed simultaneously for the lunch generator. The image classifier will display uploaded images and prediction results.
*   **User Interaction**:
    *   A button click will trigger the generation and display of a new random menu item.
    *   The affiliate form allows users to submit inquiries via Formspree.
    *   Users can leave comments via the integrated Disqus comment section.
    *   Users can upload an image file, and a button click will trigger the dog/cat prediction.
*   **AdSense Eligibility Enhancements**:
    *   Descriptive text added to key sections for better content context.
    *   A footer with placeholder links for "Privacy Policy", "Terms of Service", and "Contact Us" to meet common website requirements.
*   **Deployment**: The website will be deployed directly to GitHub Pages.

## Features

*   Displays a "Generate Menu" button.
*   When the button is clicked, a random lunch menu item is displayed with its corresponding image.
*   A descriptive text explains the purpose of the Lunch Menu Generator.
*   The list of menu items is: Chicken Salad, Hamburger, Kimbap, Pasta, and Pizza.
*   Includes an "Affiliate Inquiry" form with fields for Name, Email, and Message, submitting data to Formspree.
*   Integrates a Disqus comment section at the bottom of the page for user interaction.
*   **Image Upload:** Users can select an image file from their local device for classification.
*   **Image Display:** The selected image is displayed on the page for the classifier.
*   A descriptive text explains the functionality of the Dog/Cat Image Classifier.
*   **Teachable Machine Integration:** Utilizes a pre-trained Teachable Machine image classification model (`https://teachablemachine.withgoogle.com/models/qjdhozga8/`).
*   **Prediction Results:** Displays the predicted class (dog or cat) along with the probability for the uploaded image.
*   **Site Footer:** Includes links to Privacy Policy, Terms of Service, and Contact Us pages (placeholders).

## File Structure

*   `index.html`: The main HTML file. It will contain the basic page structure, including the lunch menu generator, the affiliate inquiry form, the Disqus comment section, the image classifier section, descriptive texts, and the site footer.
*   `main.js`: Contains the JavaScript logic for both generating random menu items and the image classifier functionality (handling uploads, predictions).
*   `style.css`: Contains the CSS for styling both the lunch menu generator, the affiliate inquiry form, the image classifier section, the descriptive texts, and the new site footer, along with general page layout.
*   `images/`: Contains the images for the menu items (`chickensalad.jpg`, `hamburger.jpg`, `kimbap.jpg`, `pasta.jpg`, `pizza.jpg`).

## Current Plan for Requested Change

The current task is to make the website more suitable for Google AdSense registration by adding more descriptive content and essential legal/contact information.

### Steps Taken:

1.  **Modified `index.html`**:
    *   Added a descriptive paragraph under the "What's for Lunch?" heading.
    *   Added a descriptive paragraph under the "Dog/Cat Image Classifier" heading.
    *   Added a `<footer>` section after the Disqus container, containing placeholder links for "Privacy Policy", "Terms of Service", and "Contact Us".
2.  **Modified `style.css`**:
    *   Added styling for the new `.description` class to format the descriptive paragraphs.
    *   Added styling for the `.footer-container` to style the site footer.

## GitHub Pages Deployment Instructions

To deploy your project directly to GitHub Pages, please follow these manual steps:

1.  **Commit your changes**: Ensure all your project files (including `index.html`, `style.css`, `main.js`, and the `images/` folder) are committed to your GitHub repository.
    *   You might need to use `git add .` and `git commit -m "Integrated Dog/Cat Image Classifier into Lunch Menu Generator"`
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
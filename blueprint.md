# Lunch Menu Generator & Dog/Cat Image Classifier

## Overview

A web application that combines a random lunch menu generator, an affiliate inquiry form, a Disqus comment section, and a Dog/Cat image classifier. Users can generate random lunch suggestions, submit affiliate inquiries, engage in comments, and classify images using a pre-trained Teachable Machine model.

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
*   **Deployment**: The website will be deployed directly to GitHub Pages.

## Features

*   Displays a "Generate Menu" button.
*   When the button is clicked, a random lunch menu item is displayed with its corresponding image.
*   The list of menu items is: Chicken Salad, Hamburger, Kimbap, Pasta, and Pizza.
*   Includes an "Affiliate Inquiry" form with fields for Name, Email, and Message, submitting data to Formspree.
*   Integrates a Disqus comment section at the bottom of the page for user interaction.
*   **Image Upload:** Users can select an image file from their local device for classification.
*   **Image Display:** The selected image is displayed on the page for the classifier.
*   **Teachable Machine Integration:** Utilizes a pre-trained Teachable Machine image classification model (`https://teachablemachine.withgoogle.com/models/qjdhozga8/`).
*   **Prediction Results:** Displays the predicted class (dog or cat) along with the probability for the uploaded image.

## File Structure

*   `index.html`: The main HTML file. It will contain the basic page structure, including the lunch menu generator, the affiliate inquiry form, the Disqus comment section, and the new image classifier section.
*   `main.js`: Contains the JavaScript logic for both generating random menu items and the image classifier functionality (handling uploads, predictions).
*   `style.css`: Contains the CSS for styling both the lunch menu generator, the affiliate inquiry form, and the new image classifier section, along with general page layout.
*   `images/`: Contains the images for the menu items (`chickensalad.jpg`, `hamburger.jpg`, `kimbap.jpg`, `pasta.jpg`, `pizza.jpg`).

## Current Plan for Requested Change

The current task is to integrate the previously built Dog/Cat Image Classifier into the existing Lunch Menu Generator project. This involves combining the HTML, JavaScript, and CSS for both functionalities into a single web application.

### Steps Taken:

1.  **Reverted Repository**: Performed a `git reset --hard 9197caa` to revert the repository to the state just before the standalone image classifier was implemented, ensuring all original files (`index.html`, `main.js`, `style.css`) for the Lunch Menu Generator were restored.
2.  **Modified `index.html`**:
    *   Added `<!-- Teachable Machine scripts -->` and the corresponding `<script>` tags for TensorFlow.js and Teachable Machine Image library to the `<head>`.
    *   Appended a new `div` with class `container classifier-container` containing the `<h1>Dog/Cat Image Classifier</h1>`, `<input type="file" id="imageUpload">`, `<img id="previewImage">`, `<button onclick="predictFile()">Predict</button>`, and `<div id="label-container"></div>` elements to the end of the `<body>` section.
3.  **Modified `main.js`**:
    *   Wrapped the existing lunch menu generator logic within a new function `initLunchMenuGenerator()`.
    *   Added the Teachable Machine model URL, `model`, `maxPredictions`, and DOM element variables (`imageUpload`, `previewImage`, `predictButton`, `labelContainer`).
    *   Implemented `initImageClassifier()` to load the Teachable Machine model and set up event listeners for the image classifier elements.
    *   Implemented `handleImageUpload(event)` to manage file selection, display the image, and enable/disable the predict button.
    *   Implemented `predictFile()` to perform the image prediction using the loaded Teachable Machine model and display results.
    *   Modified the `DOMContentLoaded` event listener to call both `initLunchMenuGenerator()` and `initImageClassifier()`.
4.  **Modified `style.css`**: Appended new CSS rules specifically for the image classifier elements (e.g., `.classifier-container`, `input[type="file"]`, `img#previewImage`, `#label-container`) to the existing `style.css` to ensure consistent styling and avoid conflicts.

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

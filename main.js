// Lunch Menu Generator Logic
document.addEventListener('DOMContentLoaded', () => {
    initLunchMenuGenerator();
    initImageClassifier(); // Initialize the image classifier
});

function initLunchMenuGenerator() {
    const menuOptions = {
        "Chicken Salad": "images/chickensalad.jpg",
        "Kimbap": "images/kimbap.jpg",
        "Pizza": "images/pizza.jpg",
        "Hamburger": "images/hamburger.jpg",
        "Pasta": "images/pasta.jpg"
    };
    const menuKeys = Object.keys(menuOptions);
    const generateMenuBtn = document.getElementById('generateMenuBtn');
    const menuDisplay = document.getElementById('menuDisplay');
    const menuImage = document.getElementById('menuImage');

    generateMenuBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * menuKeys.length);
        const selectedMenu = menuKeys[randomIndex];
        menuDisplay.textContent = selectedMenu;
        menuImage.src = menuOptions[selectedMenu];
        menuImage.alt = selectedMenu;
    });
}

// Image Classifier Logic
const URL = "https://teachablemachine.withgoogle.com/models/qjdhozga8/";

let model, maxPredictions;
let imageUpload, previewImage, predictButton, labelContainer;

// Load the image model
async function initImageClassifier() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Get DOM elements for classifier
    imageUpload = document.getElementById("imageUpload");
    previewImage = document.getElementById("previewImage");
    // Select the button within the classifier-container
    predictButton = document.querySelector(".classifier-container button");
    labelContainer = document.getElementById("label-container");

    // Add event listener for file input
    if (imageUpload) { // Check if element exists
        imageUpload.addEventListener("change", handleImageUpload);
    }

    // Initialize label containers
    if (labelContainer) { // Check if element exists
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }
    }
}

// Function to handle image file upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block"; // Show the image
            if (predictButton) {
                predictButton.disabled = false; // Enable predict button
            }
            // Clear previous predictions
            if (labelContainer) {
                for (let i = 0; i < maxPredictions; i++) {
                    labelContainer.childNodes[i].innerHTML = "";
                }
            }
        };
        reader.readAsDataURL(file);
    } else {
        previewImage.style.display = "none";
        previewImage.src = "#";
        if (predictButton) {
            predictButton.disabled = true;
        }
    }
}

// Function to run the prediction on the uploaded image
async function predictFile() {
    if (!previewImage.src || previewImage.src === "#") {
        alert("Please upload an image first.");
        return;
    }

    if (predictButton) {
        predictButton.disabled = true; // Disable button during prediction
        predictButton.textContent = "Predicting...";
    }

    // Create a canvas from the image to feed to the model
    const imgElement = new Image();
    imgElement.src = previewImage.src;
    await imgElement.decode(); // Ensure image is loaded

    const canvas = document.createElement('canvas');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgElement, 0, 0);

    const prediction = await model.predict(canvas);

    if (labelContainer) {
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(2) + "%";
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }

    if (predictButton) {
        predictButton.disabled = false; // Re-enable button
        predictButton.textContent = "Predict";
    }
}
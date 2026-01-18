document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend-button');
    const menuDisplay = document.getElementById('menu-display');

    if (recommendButton && menuDisplay) {
        // Initial message to verify script execution and element visibility
        menuDisplay.innerHTML = '<p>Script loaded. Ready to test recommendations!</p>';
        menuDisplay.style.opacity = 1; // Ensure initial visibility
        menuDisplay.style.transform = 'none'; // Remove any previous transform

        recommendButton.addEventListener('click', () => {
            // Display static test content on button click
            menuDisplay.innerHTML = '<h2>Test Recommendation!</h2><p>If you see this, the button click works!</p>';
            menuDisplay.style.opacity = 1; // Ensure visibility
            menuDisplay.style.transform = 'none'; // Reset transform
        });
    } else {
        // Fallback for debugging if elements are not found
        document.body.innerHTML += '<div style="color: red; text-align: center; margin-top: 50px;">' +
                                  'ERROR: Essential elements (button or display area) not found. ' +
                                  'Check IDs in index.html and main.js.' +
                                  '</div>';
        console.error('Critical: recommendButton or menuDisplay not found!');
    }
});

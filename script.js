async function fetchRecipes() {
    const response = await fetch('app.js'); // Assuming app.js is in the same folder
    const text = await response.text();
    eval(text); // Execute the app.js code
}

document.addEventListener('DOMContentLoaded', fetchRecipes);


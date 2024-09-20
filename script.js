const images = ["1.jpg", "2.jpg", "3.jpg"];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function changeAllImages() {
    // Get all images on the page
    const imgElements = document.querySelectorAll('img');

    // Update each image's src attribute with a randomly selected image file (keeping folder structure)
    imgElements.forEach(img => {
        // Extract the current folder part (everything before the image file name)
        const currentSrc = img.src; // Full URL path
        const pathParts = currentSrc.split('/'); // Split by '/'
        
        // Replace the last part (the actual image file name) with a randomly selected one
        pathParts[pathParts.length - 1] = getRandomImage();
        
        // Join the path back together and set the new src
        img.src = pathParts.join('/');
    });
}

function getRandomInterval() {
    // Generate a random interval between 1000 ms (1 second) and 5000 ms (5 seconds)
    return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}

function startRandomImageChange() {
    changeAllImages(); // Change images initially

    // Set a new random interval each time
    setTimeout(function() {
        startRandomImageChange(); // Recursively call the function to continue changing images
    }, getRandomInterval());
}

// Start the random image change process
startRandomImageChange();
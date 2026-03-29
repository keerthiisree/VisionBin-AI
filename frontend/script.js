// Connect the buttons to the display
const imageInput = document.getElementById('imageUpload');
const videoInput = document.getElementById('videoUpload');
const displayContainer = document.getElementById('display-container');

// When a photo is uploaded...
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayContainer.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 100%; border-radius: 8px; object-fit: contain;">`;
        };
        reader.readAsDataURL(file);
    }
});

// When a video is uploaded...
videoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        displayContainer.innerHTML = `
            <video controls autoplay style="max-width: 100%; max-height: 100%; border-radius: 8px;">
                <source src="${fileURL}" type="${file.type}">
            </video>`;
    }
});
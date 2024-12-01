// Select all boxes
const boxes = document.querySelectorAll('.box');

// Iterate through each box
boxes.forEach((box) => {
    // Find the options panel inside the current box
    const optionsPanel = box.querySelector('.options');

    // Add event listeners to color buttons
    const colorButtons = optionsPanel.querySelectorAll('.color-btn');
    colorButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // Prevent the event from bubbling up to parent elements
            e.stopPropagation();

            // Alert the selected color
            const selectedColor = button.getAttribute('data-color');
            alert(`You selected the color: ${selectedColor}`);
        });
    });

    // Add event listeners to size buttons
    const sizeButtons = optionsPanel.querySelectorAll('.size-btn');
    sizeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // Prevent the event from bubbling up to parent elements
            e.stopPropagation();

            // Alert the selected size
            const selectedSize = button.getAttribute('data-size');
            alert(`You selected the size: ${selectedSize}`);
        });
    });
});

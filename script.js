// 1. Select the line element
const line = document.getElementById('line');

// 2. Initialize a global variable for the rotation angle
let currentAngle = 0;

/**
 * Function to update the rotation
 */
function rotateLine() {
    // Increment the angle by 2 degrees
    currentAngle += 2;

    /**
     * Apply the transformation. 
     * Note: We include translate(-50%, -50%) to keep the line 
     * perfectly centered while it rotates.
     */
    line.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
}

// 3. Set the interval to run every 20 milliseconds
setInterval(rotateLine, 20);

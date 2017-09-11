let halfWidth;
let halfHeight;

let prevX;
let prevY;

let theta = 0;

function setup() {
    createCanvas(600, 600);
    ellipseMode(CENTER);
    noCursor();
    colorMode(HSB, 255);

    // Calculate these once instead of over and over (they don't change)
    halfWidth = width / 2;
    halfHeight = height / 2;

    prevX = mouseX;
    prevY = mouseY;
}

function draw() {
    theta += 0.01;
}

function mouseMoved() {
    // Calculate speed
    const dx = Math.abs(mouseX - prevX);
    const dy = Math.abs(mouseY - prevY);
    const speed = constrain(dx + dy, 0, 125);
    noStroke();
    fill(
        map(Math.cos(theta), -1, 1, 0, 255),
        map(speed, 0, 125, 30, 255),
        225
    );

    // Start by drawing wherever the mouse actually is
    paint(mouseX, mouseY);

    // Mirror horizontally
    paint(
        (halfWidth) + (halfWidth - mouseX),
        mouseY
    );

    // Mirror vertically
    paint(
        mouseX,
        (halfHeight) + (halfHeight - mouseY)
    );

    // Mirror both vertically and horizontally
    paint(
        (halfWidth) + (halfWidth - mouseX),
        (halfHeight) + (halfHeight - mouseY)
    );

    prevX = mouseX;
    prevY = mouseY;
}

function paint(x, y) {
    // Size of our brush
    const d = map(Math.cos(theta), -1, 1, 10, 100);

    ellipse(x, y, d, d);
}
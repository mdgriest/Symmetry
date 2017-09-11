let halfWidth;
let halfHeight;

let x;
let y;

let theta;

function setup() {
    createCanvas(0.9 * windowHeight, 0.9 * windowHeight);
    ellipseMode(CENTER);
    noCursor();
    colorMode(HSB, 255);

    // Calculate these once instead of over and over (they don't change)
    halfWidth = width / 2;
    halfHeight = height / 2;

    theta = random(0, PI);

    x = random(0.1 * halfWidth, 0.9 * halfWidth);
    y = random(0.1 * halfHeight, 0.9 * halfHeight);
}

function draw() {
    theta += 0.01;

    if (theta >= TWO_PI) {
        theta = random(0, PI);
    }

    // Calculate speed
    noStroke();
    fill(
        // 145,
        map(Math.cos(theta), -1, 1, 135, 150),
        200,
        map(Math.cos(theta), -1, 1, 100, 255)
    );

    // Start by drawing wherever the mouse actually is
    paint(x, y);

    // Mirror horizontally
    paint(
        (halfWidth) + (halfWidth - x),
        y
    );

    // Mirror vertically
    paint(
        x,
        (halfHeight) + (halfHeight - y)
    );

    // Mirror both vertically and horizontally
    paint(
        (halfWidth) + (halfWidth - x),
        (halfHeight) + (halfHeight - y)
    );

    x += Math.min(Math.abs(Math.tan(theta)), 3);
    y += Math.min(Math.abs(Math.tan(theta)), 3);

    if (x < 0 || x > width) {
        x = random(0.1 * halfWidth, 0.9 * halfWidth);
    }
    if (y < 0 || y > height) {
        y = random(0.1 * halfHeight, 0.9 * halfHeight);
    }
}

function paint(x, y) {
    // Size of our brush
    const d = map(Math.cos(theta), -1, 1, 0.01 * height, 0.1 * height);

    ellipse(x, y, d, d);
}
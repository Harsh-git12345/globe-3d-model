const globe = [];
const r = 200;
const total = 25;
let angleX = 0;
let angleY = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  fill(255);
  strokeWeight(2);
  stroke(200);

  for (let i = 0; i < total + 1; i++) {
    globe[i] = [];
    const lat = map(i, 0, total, 0, PI);
    for (let j = 0; j < total + 1; j++) {
      const lon = map(j, 0, total, 0, TWO_PI);
      const x = r * sin(lat) * cos(lon);
      const y = r * sin(lat) * sin(lon);
      const z = r * cos(lat);
      globe[i][j] = createVector(x, y, z);
    }
  }
}

function draw() {
  background(51);
  rotateX(angleX);
  rotateY(angleY);

  for (let i = 0; i < total; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total + 1; j++) {
      const v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      const v2 = globe[i + 1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }

  angleX += 0.005;
  angleY += 0.006;
}const globe1 = [];
const r1 = 200;
const total1 = 25;
let angle1X = 0;
let angle1Y = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  fill(255);
  strokeWeight(2);
  stroke(200);

  for (let i = 0; i < total1 + 1; i++) {
    globe1[i] = [];
    const lat = map(i, 0, total1, 0, PI);
    for (let j = 0; j < total1 + 1; j++) {
      const lon = map(j, 0, total1, 0, TWO_PI);
      const x = r1 * sin(lat) * cos(lon);
      const y = r1 * sin(lat) * sin(lon);
      const z = r1 * cos(lat);
      globe1[i][j] = createVector(x, y, z);
    }
  }
}

function draw() {
  background(51);
  rotateX(angle1X);
  rotateY(angle1Y);

  for (let i = 0; i < total1; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total1 + 1; j++) {
      const v1 = globe1[i][j];
      vertex(v1.x, v1.y, v1.z);
      const v2 = globe1[i + 1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }

  angle1X += 0.005;
  angle1Y += 0.006;
}
void setup() {
  size(500, 500);
  colorMode(HSB, 360, 100, 100);
  int m=minute(); //0-59
  int h=hour();  //0-23
  int d=day();  //1-31

  float t=h*60+m;
  float hue=map(t, 0, 1440, 0, 360);
  float b=0;
  if (h<12) {
    b=map(t, 0, 720, 50, 100);
  } else {
    b=map(t, 720, 1440, 100, 50);
  }

  float s=map(d, 1, 31, 50, 100);

  background(hue, s, b);
  save("output.png");
  exit();
}
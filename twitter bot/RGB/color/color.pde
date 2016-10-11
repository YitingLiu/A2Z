void setup(){
  size(500,500);
  int m=minute(); //0-59
  int h=hour();  //0-23
  int d=day();  //1-31
  
  float r=map(d,1,31,0,255);
  float g=map(h,0,23,0,255);
  float b=map(m,0,59,0,255);
  
  background(r, g, b);
  save("output.png");
  exit();
}
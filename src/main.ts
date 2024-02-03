import { Renderer } from './Drawing/Renderer.ts';
import { Vector } from './Math/Vector.ts';
import { Grid } from './Utilities/Grid.ts';
import './style.css';

let p: Renderer;
let g: Grid;

function setup() {
  p = new Renderer(400 , 500);
  g = new Grid(4, 4, 40, 50);

  g.verticalGrid();
  p.background("white");
}

function draw() {
  g.displayGrid(p);
  let startV = new Vector(30, 75);
  let endV = new Vector(58, 20);
  let ellipseV = new Vector(50, 50);
  let arcV = new Vector(200, 55);
  
  p.fill('red');
  p.ellipse(ellipseV, 50, 50);
  p.line(startV, endV);
  p.arc(arcV, 50, 50, 0,4.2);
}
setup();
window.requestAnimationFrame(draw);

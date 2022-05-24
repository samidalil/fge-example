import p5 from "p5";

export const draw = (p5: p5) => {
  p5.background(80);

  return p5;
};

export const setup = (p5: p5, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

  return p5;
};

export const windowResized = (p5: p5) => {
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

  return p5;
};

export type Color = {
  r: number,
  g: number,
  b: number,
  a: number
};

export type GradientValue = {
  id: number,
  color: Color,
  stop: number
};

export type Gradient = {
  colors: Array<Color>,
  stops: Array<number>,
  angle: number
};

export const generateGradientString = (gradient: Gradient) => gradient.colors
  .map((item: Color, index : number) => (
    `rgba(${item.r}, ${item.g}, ${item.b}, ${item.a}) ${gradient.stops[index]}%`
  ))
  .join(', ');

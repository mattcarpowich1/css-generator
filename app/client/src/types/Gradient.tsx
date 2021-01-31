type Color = {
  r: number,
  g: number,
  b: number,
  a: number
};

export type GradientValue = {
  color: Color,
  stop: number
};

export type Gradient = {
  values: Array<GradientValue>,
  angle: number
};

export const generateGradientString = (gradient: Gradient) => {
  if (gradient.values.length === 0) {
    return '';
  }
  return gradient.values.map((item: GradientValue) => (
    `rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, ${item.color.a}) ${item.stop}%`
  )).join(', ');
};

import {
  GradientValue,
  Gradient
} from '../../types/Gradient';

const gv1 : GradientValue = {
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: .3
  },
  stop: 0
};

const gv2 : GradientValue = {
  color: {
    r: 99,
    g: 245,
    b: 66,
    a: .7
  },
  stop: 100
};

const initialState : Gradient = {
  values: [gv1, gv2],
  angle: -50
};

type Action = {
  type: string
};

export const GradientReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

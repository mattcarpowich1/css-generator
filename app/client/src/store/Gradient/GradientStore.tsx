import {
  Color,
  Gradient
} from '../../types/Gradient';

const c1 : Color = {
  r: 37,
  g: 99,
  b: 134,
  a: .4
};

const c2 : Color = {
  r: 156,
  g: 37,
  b: 214,
  a: .8
};

const initialState : Gradient = {
  colors: [c1, c2],
  stops: [0, 100],
  angle: 90
}

type Action = {
  type: 'UPDATE_STOPS' | 'UPDATE_ANGLE',
  id?: number,
  color?: Color,
  stops?: Array<number>,
  angle?: number
};

export const GradientReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case 'UPDATE_STOPS': {
      const { stops } = action;
      return {
        ...state,
        stops
      }
    }
    case 'UPDATE_ANGLE': {
      const { angle } = action;
      return {
        ...state,
        angle
      }
    }
    default: {
      return state;
    }
  }
};

import {
  Color,
  GradientValue,
  Gradient
} from '../../types/Gradient';

const gv1 : GradientValue = {
  id: 0,
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: .3
  },
  stop: 0
};

const gv2 : GradientValue = {
  id: 1,
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
  angle: 90
};

type Action = {
  type: 'UPDATE_COLOR' | 'UPDATE_STOP' | 'UPDATE_ANGLE',
  id?: number,
  color?: Color,
  stop?: number,
  angle?: number
};

export const GradientReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case 'UPDATE_COLOR': {
      const { id, color } = action;
      return {
        ...state,
        values: state.values.map(v => v.id === id ? ({
          ...v,
          color
        }) : v)
      }
    }
    case 'UPDATE_STOP': {
      const { id, stop } = action;
      return {
        ...state,
        values: state.values.map(v => v.id === id ? ({
          ...v,
          stop
        }) : v)
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

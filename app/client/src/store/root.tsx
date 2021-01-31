import { createStore, combineReducers } from 'redux'
import { Gradient as GradientType } from '../types/Gradient';
import {
  GradientReducer as gradient
} from './Gradient';

export type RootState = {
  gradient: GradientType
};

const reducers = combineReducers({
  gradient
});

const store = createStore(reducers);

export default store;


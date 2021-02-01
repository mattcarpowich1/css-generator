import React from 'react';
import { Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CustomSlider from './CustomSlider';
import { RootState } from '../../store/root';
import useStyles from './styles';

const Controls = () => {
  const gradient = useSelector((state: RootState) => state.gradient);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeStop = (e : any, newValue: any) => {
    dispatch({
      type: 'UPDATE_STOPS',
      stops: newValue
    })
  }

  return (
    <Paper className={classes.paper}>
      <CustomSlider
        className={classes.slider}
        value={gradient.stops}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        onChange={handleChangeStop}
        min={0}
        max={100}
        step={1}
      />
    </Paper>
  );
};

export default Controls;

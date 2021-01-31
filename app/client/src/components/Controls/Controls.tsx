import React from 'react';
import { Paper, Slider, withStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/root';
import useStyles from './styles';

const CustomSlider = withStyles({
  root: {
    color: '#777',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Controls = () => {
  const gradient = useSelector((state: RootState) => state.gradient);
  const classes = useStyles(gradient)();
  const dispatch = useDispatch();

  const handleChangeStop = (e : any, newValue: any) => {
    const id : number = parseInt(e.target.dataset.index);
    dispatch({
      type: 'UPDATE_STOP',
      id,
      stop: newValue[id]
    })
  }

  return (
    <Paper className={classes.paper}>
      <CustomSlider
        className={classes.slider}
        value={gradient.values.map(v => v.stop)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        onChange={handleChangeStop}
      />
    </Paper>
  );
};

export default Controls;

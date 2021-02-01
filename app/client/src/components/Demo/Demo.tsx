import React from 'react';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Gradient, generateGradientString } from '../../types/Gradient';
import { RootState } from '../../store/root';
import { backgroundImgUrl } from './utils';
import useStyles from './styles';

const Demo = () => {

  const gradient = useSelector((state : RootState) => state.gradient);

  const classes = useStyles();

  const gradientStyles = (g: Gradient) => ({
    backgroundImage: g.stops.length > 0 ? (
      `linear-gradient(${g.angle}deg, ${generateGradientString(g)}), url("${backgroundImgUrl}")`
    ) : (
      `url(${backgroundImgUrl})`
    )
  });

  return (
    <Paper
      className={classes.paper}
      style={gradientStyles(gradient)}
    />
  );
};

export default Demo;

import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './styles';
import { Gradient, GradientValue, generateGradientString } from '../../types/Gradient';
import { backgroundImgUrl } from './utils';

const Demo = () => {

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

  const gradient : Gradient = {
    values: [gv1, gv2],
    angle: -50
  };

  const classes = useStyles();

  const gradientStyles = (g: Gradient) => ({
    backgroundImage: g.values.length > 0 ? (
      `linear-gradient(${g.angle}deg, ${generateGradientString(g)}), url("${backgroundImgUrl}")`
    ) : (
      `url(${backgroundImgUrl})`
    )
  });

  return (
    <Paper className={classes.paper} style={gradientStyles(gradient)}/>
  );
};

export default Demo;

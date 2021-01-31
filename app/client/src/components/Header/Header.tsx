import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.headerText} variant="h5" color="inherit" noWrap>
          CSS GENERATOR
        </Typography>
        <MenuIcon className={classes.menuIcon} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

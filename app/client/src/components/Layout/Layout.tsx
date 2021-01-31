import React, { ReactNode } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../Header';
import { theme, useStyle } from './styles';

type LayoutProps = {
  children: ReactNode 
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
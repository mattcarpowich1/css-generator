import { makeStyles } from '@material-ui/core/styles';
import { Gradient } from '../../types/Gradient';

const useStyles = (g: Gradient) => makeStyles(theme => ({
    paper: {
      width: '100%',
      maxWidth: 600,
      height: 'auto',
      margin: `${theme.spacing(4)}px auto`,
      backgroundColor: theme.palette.grey[200],
      boxSizing: 'border-box',
      padding: `${theme.spacing(4)}px`
  }, 
  slider: {
    
  }
}));

export default useStyles;
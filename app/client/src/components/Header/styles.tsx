import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.grey[900]
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 700
  },
  menuIcon: {
    fontSize: 40,
    color: theme.palette.grey[800]
  }
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#00DBDE',
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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

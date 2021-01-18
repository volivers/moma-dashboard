import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  error: {
    backgroundColor: 'rgba(255, 69, 96, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  warning: {
    backgroundColor: 'rgba(254, 176, 25, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  info: {
    backgroundColor: ' rgba(0, 227, 150, 0.85)',
    margin: '10px 10px',
    textTransform: 'capitalize',
    transition: 'transform .3s ease-in',
    "&:hover": {
      transform: 'scale(1.02)'
    }
  },
  wrapperTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  wrapperFiltering: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  wrapperBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btnFav: {
    margin: '0 10px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  wrapperList: {
    maxHeight: '120vh',
    overflow: 'auto',
    marginBottom: '80px'
  }
}));
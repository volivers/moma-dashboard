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
  chip: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#616161',
    marginLeft: '5px'
  }
}));
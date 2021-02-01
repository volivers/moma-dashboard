import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
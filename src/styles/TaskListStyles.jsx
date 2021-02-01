import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapperTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  wrapperBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btnFav: {
    margin: '0 10px'
  },
  wrapperList: {
    maxHeight: '120vh',
    overflow: 'auto',
    marginBottom: '80px'
  }
}));
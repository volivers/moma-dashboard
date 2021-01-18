import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    margin: '10px 0',
  },
  wrapperArtworks: {
    height: 350,
    width: '100%'
  },
  wrapperTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrapperViews: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
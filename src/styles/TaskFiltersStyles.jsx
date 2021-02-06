import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapperFiltering: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: '10px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));
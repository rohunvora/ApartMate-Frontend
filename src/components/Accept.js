import React, {useState, center, absolute } from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../utils/setAuthToken';
// import { Redirect } from 'react-router-dom';

// importing material UI components___________________________________
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// _______________________________________________________________________

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'apartmate © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
    borderRadius: 4
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Accept = (props) => {
    const [groupName, setGroupName] = useState('')
    
    const classes = useStyles();

    const handleSubmit = (e) => {
      e.preventDefault()
    //   const userData = {email, password}
    //   axios.post(`${REACT_APP_SERVER_URL}/api/users/login`, userData)
    //     .then(response => {
    //         const { token } = response.data
    //         localStorage.setItem('jwtToken', token)
    //         setAuthToken(token)
    //         const decoded = jwt_decode(token)
    //         props.nowCurrentUser(decoded)
    //     })
    //     .catch(err => console.log(`Login Error`, err))
    }

    const handleGroupName = (e) => {
        setGroupName(e.target.value)
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} >
          <CheckIcon />
        </Avatar> 
        <Typography component="h1" variant="h3">
            You've been invited to ...
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <br /><br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            🤝 Accept Group Invitation!
          </Button>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Accept;

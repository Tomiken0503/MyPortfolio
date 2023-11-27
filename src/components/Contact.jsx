import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  contactIcon: {
    color: 'gray',
    fontSize: '5rem',
    marginBottom: theme.spacing(2),
    display: 'block',
    margin: '0 auto',
    transition: 'all 0.5s', // マウスが上に乗ったら0.3秒かけて色が青に変わる
    '&:hover': {
      color: 'blue', // マウスが上に乗ったら色が青に変わる
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contactWrapper} id='contact'>
      <Typography variant='h4' className={classes.title}>
        Contact
      </Typography>
      <Grid container spacing={3} className={classes.message}>
        <Grid item>
          <a href='mailto:tommy.junior103@gmail.com'>
            <EmailIcon className={classes.contactIcon} />
          </a>
        </Grid>
        <Grid item>
          <a
            href='https://www.facebook.com/kentatomita0503'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon className={classes.contactIcon} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;

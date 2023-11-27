import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  navLink: {
    marginLeft: theme.spacing(3),
    color: 'black',
    textDecoration: 'none',
    transition: 'all 0.5s',
    '&:hover': {
      color: 'gray',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  footerWrapper: {
    textAlign: 'center',
    backgroundColor: '#16E7CF',
    height: '80px',
    lineHeight: '80px',
    boxShadow: '0px -2px 15px -5px #777777',
    marginTop: '30px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.footerWrapper}>
        <Scroll
          to='about'
          smooth={true}
          className={classes.navLink}
          offset={-90}
        >
          About
        </Scroll>
        <Scroll
          to='skills'
          smooth={true}
          className={classes.navLink}
          offset={-70}
        >
          Skills
        </Scroll>
        <Scroll
          to='works'
          smooth={true}
          className={classes.navLink}
          offset={-70}
        >
          Works
        </Scroll>
        <Scroll
          to='contact'
          smooth={true}
          className={classes.navLink}
          offset={-70}
        >
          Contact
        </Scroll>
      </div>
    </footer>
  );
};

export default Footer;

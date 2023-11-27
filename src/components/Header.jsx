import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#16E7CF',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#16E7CF',
    },
    height: '80px', // Increase the height to 80px
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed', // ヘッダーの位置を固定
    top: 0, // ヘッダーを画面の上部に配置
    width: '100%', // ヘッダーを画面幅いっぱいに広げる
    zIndex: 100, // 他の要素よりも手前に表示
  },
  title: {
    flexGrow: 1,
    color: 'black',
    [theme.breakpoints.down('sm')]: {},
  },
  navLink: {
    marginLeft: theme.spacing(3),
    color: 'black',
    textDecoration: 'none',
    transition: 'all 0.5s', // マウスが上に乗ったら0.3秒かけて色が青に変わる
    '&:hover': {
      color: 'gray', // マウスが上に乗ったら色が青に変わる
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Kenta Tomita
            <br />
            Portfolio
          </Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

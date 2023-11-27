import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  worksWrapper: {
    padding: theme.spacing(3),
    margin: '50px auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  works: {
    display: 'flex',
    spacing: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'display-none',
  },
  work: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    backgroundColor: '#8ae6dc',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  workText: {
    padding: theme.spacing(2),
    width: '300px',
    height: '400px',
    border: '1px solid gray',
    backgroundColor: '#8ae6dc',
    textAlign: 'left',
  },
  link: {
    display: 'inline-block',
    textAlign: 'center',
    '&:hover': {
      opacity: '0.7',
    },
  },
}));

const Works = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.worksWrapper} id='works'>
      <Typography variant='h4' className={classes.title}>
        Works
      </Typography>
      <Grid className={classes.works} container>
        <div item xs={12} sm={6} className={classes.work}>
          <a
            className={classes.link}
            href='https://github.com/Tomiken0503/MyTodoApp'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='Images/TodoApp.png'
              width='300'
              height='200'
              alt='TodoApp'
              style={{ borderRadius: '10px' }}
              border='1px'
            />
            <br />
            タスク管理アプリ
          </a>

          <Paper className={classes.workText}>
            <p>言語：JavaScript</p>
            <p>フレームワーク：Node.js</p>
            <p>ライブラリ：React</p>
            <p>制作期間：7日間</p>
            <p>作業時間：開発25時間,テスト3時間</p>
            <p>制作時期：10月下旬</p>
          </Paper>
        </div>
        <div item xs={12} sm={6} className={classes.work}>
          <a
            className={classes.link}
            href='https://github.com/Tomiken0503/Pokemon-App'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='Images/PokemonApp.png'
              width='300'
              height='200'
              alt='TodoApp'
              style={{ borderRadius: '10px' }}
              border='1px'
            />
            <br />
            ポケモン図鑑
          </a>
          <Paper className={classes.workText}>
            <p>言語：JavaScript</p>
            <p>フレームワーク：Node.js</p>
            <p>ライブラリ：React</p>
            <p>制作期間：2日間</p>
            <p>作業時間：開発10時間,テスト1時間</p>
            <p>制作時期：11月初旬</p>
            <p>React学習の一環として作成</p>
          </Paper>
        </div>
      </Grid>
      <Grid className={classes.works} container>
        <div item xs={12} sm={6} className={classes.work}>
          <a
            className={classes.link}
            href='https://github.com/Tomiken0503/Diary-App'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='Images/DiaryApp.png'
              width='300'
              height='200'
              alt='TodoApp'
              style={{ borderRadius: '10px' }}
              border='1px'
            />
            <br />
            日記投稿アプリ
          </a>
          <Paper className={classes.workText}>
            <p>言語：JavaScript</p>
            <p>フレームワーク：Node.js</p>
            <p>ライブラリ：React</p>
            <p>制作期間：3日間</p>
            <p>作業時間：開発12時間,テスト3時間</p>
            <p>制作時期：11月初旬</p>
            <p>React学習の一環として作成</p>
          </Paper>
        </div>
        <div item xs={12} sm={6} className={classes.work}>
          <a
            className={classes.link}
            href='https://github.com/Tomiken0503/Note-App'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='Images/NoteApp.png'
              width='300'
              height='200'
              alt='TodoApp'
              style={{ borderRadius: '10px' }}
              border='1px'
            />
            <br />
            ノートアプリ
          </a>
          <Paper className={classes.workText}>
            <p>言語：JavaScript</p>
            <p>フレームワーク：Node.js</p>
            <p>ライブラリ：React</p>
            <p>制作期間：3日間</p>
            <p>作業時間：開発12時間,テスト3時間</p>
            <p>制作時期：11月中旬</p>
            <p>React学習の一環として作成</p>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default Works;

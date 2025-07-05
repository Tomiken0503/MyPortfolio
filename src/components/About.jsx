import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    border: '1px solid Gray', // borderを追加
    width: '70%', // デバイスによって変わるように設定
    maxWidth: '700px',
    margin: '50px auto',
    backgroundColor: '#8ae6dc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} id='about'>
      <Typography variant='h4' className={classes.title}>
        About
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img
            src='Images/Profile-image.png'
            alt='Profile Img'
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='h6'>Name</Typography>
          <Typography>富田 憲太 Tomita Kenta</Typography>
          <br />
          <Typography variant='h6'>Birthday</Typography>
          <Typography>1995年5月3日 (28歳)</Typography>
          <br />
          <Typography variant='h6'>Hobby</Typography>
          <Typography>
            サッカー観戦、ホッケー、ゴルフ、旅行、YouTube鑑賞
          </Typography>
          <br />
          <Typography variant='h6'>Self-introduction</Typography>
          <Typography>
            宮崎県出身。工業高校の電気科を卒業後、東京の自動ドアのメンテナンス会社で3年間働いた後、地元で畜産業界のシステム開発に携わり、
            そこでプログラミングの楽しさを感じるようになりました。
            <br />
            現在は、社内およびグループ会社におけるDX推進業務に従事しており、Kintoneなどのクラウドサービス導入支援に加え、
            Pythonを用いたRPAの開発や業務効率化に取り組んでおります。
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;

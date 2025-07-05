import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import DatabaseIcon from '@material-ui/icons/Storage';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    boxShadow: 'none',
    margin: '50px auto',
    backgroundColor: '#8ae6dc',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  skill: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    border: '1px solid gray',
    backgroundColor: '#8ae6dc',
    width: '300px',
    height: '600px',
  },
  skillTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  skillIcon: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
    display: 'block',
    margin: '0 auto',
  },
  skillText: {
    textAlign: 'left',
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      id='skills'
      container
      spacing={3}
      justifyContent='center'
    >
      <Typography variant='h4' className={classes.title}>
        Skills
      </Typography>
      <Grid container item xs={12} spacing={3} justifyContent='center'>
        <Paper className={classes.skill}>
          <Typography variant='h5' className={classes.skillTitle}>
            開発
          </Typography>
          <CodeIcon className={classes.skillIcon} />
          <div className={classes.skillText}>
            <p>
              ◼️Windows Forms .NET C#：
              <br />
              　実務経験5年
              <br />
              ・前職で畜産関係のシステム開発
            </p>
            <p>
              ◼️JavaScript：実務経験2年
              <br />
              ・Kintoneカスタマイズ
              <br />
              　(アプリ間のAPI連携、表示制御等の機能追加)
              <br />
              ・申込サイトの入力制御
            </p>
            <p>
              ◼️VBA：実務経験2年
              <br />
              ・Excel業務自動化ツール作成
              <br />
              　(請求書自動作成ツールなど)
            </p>
            <p>
              ◼️Python：実務経験1年
              <br />
              ・Selenium、pywinautoを用いたRPAの開発
              <br />
              ・pandas、openpyxlを用いたデータ整形ツールの開発
            </p>
            <p>
              ◼️RPA：実務経験1年
              <br />
              ・システムへのデータ入力等の業務の自動化
            </p>
          </div>
        </Paper>
        <Paper className={classes.skill}>
          <Typography variant='h5' className={classes.skillTitle}>
            DB
          </Typography>
          <DatabaseIcon className={classes.skillIcon} />
          <div className={classes.skillText}>
            <p>
              ◼️PostgreSQL：実務経験4年
              <br />
              ・データの取得・更新・書込・削除・集計・ソートなどのSQLの知識
            </p>
            <p>
              ◼️Kintone：実務経験1年
              <br />
              ・営業管理システムの設計
            </p>
            <p>
              ◼️楽楽販売(クラウドサービス)：
              <br />
              　実務経験1年
              <br />
              ・在庫管理システムDB設計
            </p>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Skills;

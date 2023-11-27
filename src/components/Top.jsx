import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Top = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true} // カルーセルの画像切り替えをループさせる
      dynamicHeight={true} // 画像の高さを自動調整
      emulateTouch={true} // タッチ操作をエミュレート
      swipeable={true} // スワイプ操作を有効にする
    >
      <div>
        <img src='./Images/sea_in_Miyakojima.jpg' alt='sea in Miyakojima' />
      </div>
      <div>
        <img src='./Images/Sea.jpg' alt='Sea' />
      </div>
      <div>
        <img src='./Images/soccer.jpg' alt='soccer' />
      </div>
      <div>
        <img src='./Images/golf.jpg' alt='golf' />
      </div>
    </Carousel>
  );
};

export default Top;

'use client';

import './RecommendList.scss';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import { RecommendProductsType } from '@remote/api/types/home';
import Text from '@shared/text/Text';

import Spacing from '../spacing/Spacing';

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: false,
  adaptiveHeight: true,
  autoplay: true,
  arrows: false,
  speed: 2000,
  autoplaySpeed: 5000,
  swipeToSlide: true,
};

// 이부분을 슬라이드 대신 3개 나열형으로 바꿔줌
// 더보기 클릭시 랜덤 3개 추가
// 그리고 코팅제 / 세정제로 분류

// eslint-disable-next-line max-len
function RecommendList({ recommendProductsData }: { recommendProductsData: RecommendProductsType }) {
  const recommendList = recommendProductsData?.value;

  return (
    <Slider {...settings} className="recommend-slide">
      {recommendList?.map((slide) => {
        return (
          <Link href={`/product/${slide.productNo.toString()}`} key={slide.productNo} className="imageContainer">
            <Image
              // src={slide.imageSource}
              src={slide.item === '코팅제' ? '/assets/코팅제.webp' : '/assets/세정제.webp'}
              alt={slide.alt}
              width={85}
              height={85}
            />
            <Spacing size={4} />
            <Text color="gray800" typography="t7" className="ellipsis" css={{ height: '35px' }}>
              {slide.productName}
            </Text>
          </Link>
        );
      })}
    </Slider>
  );
}

export default RecommendList;

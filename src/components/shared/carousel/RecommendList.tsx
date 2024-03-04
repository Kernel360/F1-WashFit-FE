'use client';

import './RecommendList.scss';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import { RecommendProductsType } from '@remote/api/types/home';
import Text from '@shared/text/Text';

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
};

// eslint-disable-next-line max-len
function RecommendList({ recommendProductsData }: { recommendProductsData: RecommendProductsType }) {
  const recommendList = recommendProductsData?.value;

  return (
    <Slider {...settings} className="recommend-slide">
      {recommendList?.map((slide) => {
        return (
          <Link href={`/product/${slide.productNo.toString()}`} key={slide.productNo}>
            <div className="img-container">
              <Image
                // src={slide.imageSource}
                src={slide.item === '코팅제' ? '/assets/코팅제.webp' : '/assets/세정제.webp'}
                alt={slide.alt}
                width={60}
                height={60}
              />
            </div>
            <Text color="gray800" typography="t7" className="ellipsis" css={{ height: '35px' }}>{slide.productName}</Text>
          </Link>
        );
      })}
    </Slider>
  );
}

export default RecommendList;

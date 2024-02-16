'use client';

import './RecommendList.scss';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import { RecommendProductsType } from '@remote/api/types/home';
import Text from '@shared/text/Text';

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  adaptiveHeight: true,
  arrows: false,
};

// eslint-disable-next-line max-len
function RecommendList({ recommendProductsData }: { recommendProductsData: RecommendProductsType }) {
  const recommendList = recommendProductsData.value;

  return (
    <Slider {...settings} className="recommend-slide">
      {recommendList?.map((slide) => {
        return (
          <Link href={slide.link} key={slide.id}>
            <div className="img-container">
              <Image
                src={slide.imageSource}
                alt={slide.alt}
                width={60}
                height={60}
              />
            </div>
            <Text typography="t7">{slide.productName}</Text>
          </Link>
        );
      })}
    </Slider>
  );
}

export default RecommendList;

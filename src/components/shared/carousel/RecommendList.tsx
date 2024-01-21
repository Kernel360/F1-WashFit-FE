'use client';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import Flex from '@shared/flex/Flex';
import Text from '@shared/text/Text';

import { IRecommendList } from './types/carousel.type';

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 5000,
  arrows: false,
};

function RecommendList({ recommendListData }: { recommendListData: IRecommendList[] }) {
  return (
    <Slider {...settings}>
      {recommendListData?.map((slide) => {
        return (
          <Flex justify="center" align="center" direction="column" key={slide.id}>
            <Link href={slide.link}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={85}
                height={85}
              />
            </Link>
            <Text typography="t7">{slide.productName}</Text>
          </Flex>
        );
      })}
    </Slider>
  );
}

export default RecommendList;

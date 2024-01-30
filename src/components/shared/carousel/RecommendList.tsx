'use client';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import { RecommendProductsType } from '@remote/api/types/home';
import Flex from '@shared/flex/Flex';
import Text from '@shared/text/Text';

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

// eslint-disable-next-line max-len
function RecommendList({ recommendProductsData }: { recommendProductsData: RecommendProductsType }) {
  const recommendList = recommendProductsData.value;

  return (
    <Slider {...settings}>
      {recommendList?.map((slide) => {
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

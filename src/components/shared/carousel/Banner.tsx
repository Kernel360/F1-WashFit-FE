'use client';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import './Banner.scss';
import { BannerType, IBanner } from '@remote/api/types/home';

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 5000,
  arrows: false,
  centerPadding: '100px',
};

function Banner({ bannerData }: { bannerData: BannerType }) {
  const bannerList:IBanner[] = bannerData.value;

  return (
    <Slider {...settings} className="banner-slide">
      {bannerList.map((slide) => {
        return (
          <Link href={slide.link} key={slide.id}>
            <Image
              src={slide.imageSource}
              alt={slide.alt}
              objectFit="cover"
              fill
            />
          </Link>
        );
      })}
    </Slider>
  );
}

export default Banner;

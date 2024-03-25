'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import './Banner.scss';
import { BannerType, IBanner } from '@remote/api/types/home';

import Text from '../text/Text';

function Banner({ bannerData }: { bannerData: BannerType }) {
  const bannerList: IBanner[] = bannerData.value;
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerPadding: '100px',
    beforeChange: (current: number, next: number) => { return setCurrentSlide(next); },
  };
  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings} className="banner-slide">
        {bannerList.map((slide) => {
          return (
            <Link href={slide.productNo.toString()} key={slide.productNo}>
              <Image src={slide.imageSource} alt={slide.alt} objectFit="cover" fill />
            </Link>
          );
        })}
      </Slider>
      <div style={{ position: 'absolute', left: '92%', top: '90%' }}>
        <Text
          typography="t8"
          color="white"
          css={{ borderRadius: '20px', backgroundColor: 'black', padding: '4px 12px' }}
        >
          {currentSlide + 1}
          {' '}
          /
          {bannerList.length}
        </Text>
      </div>
    </div>
  );
}

export default Banner;

'use client';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import './Banner.scss';
import { IBannerData } from './types/carousel.type';

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
};

function Banner({ bannerData }: { bannerData: IBannerData[] }) {
  return (
    // <div className={cx('container')}>
    <div className="container">
      <Slider {...settings} dotsClass="dotsCustom">
        {bannerData.map((slide) => {
          return (
            <Link href={slide.link} key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={315}
                height={140}
              />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;

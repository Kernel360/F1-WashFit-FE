'use client';

import Slider from 'react-slick';

import Image from 'next/image';
import Link from 'next/link';

import './Banner.scss';
import { BannerType } from '@remote/api/types/home';

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
  const bannerList = bannerData.value;

  return (
    <div className="container">
      <Slider {...settings} dotsClass="dotsCustom">
        {bannerList.map((slide) => {
          return (
            <Link href={slide.link} key={slide.id}>
              <div className="imageContainer">
                <Image
                  src={slide.imageSource}
                  alt={slide.alt}
                  fill
                />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;

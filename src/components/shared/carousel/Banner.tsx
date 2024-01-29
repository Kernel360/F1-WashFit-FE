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
};

function Banner({ bannerData }: { bannerData: BannerType }) {
  const bannerList = bannerData.value;

  return (
    <div className="container">
      <Slider {...settings} dotsClass="dotsCustom">
        {bannerList.map((slide) => {
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

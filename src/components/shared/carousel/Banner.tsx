import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import { IBannerdata } from './types/carousel.type';

function Banner({ bannerData }: { bannerData: IBannerdata[] }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true, type: 'bullets' }}
      slidesOffsetBefore={30}
      slidesOffsetAfter={20}
      autoplay={{ delay: 2000 }}
      loop
      speed={2000}
    >
      {bannerData.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <Link href={slide.link}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={315}
                height={140}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;

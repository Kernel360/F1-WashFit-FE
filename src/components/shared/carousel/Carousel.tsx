import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import { Idata } from './types/Carousel';

interface CarouselProps {
  data: Idata[]
  slidesPerView?: number
  spaceBetween?: number
  aspectRatio: number
}

function Carousel({
  data, slidesPerView = 1, spaceBetween = 50, aspectRatio,
}: CarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop
      speed={2000}
    >
      {data.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <Link href={slide.link}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', aspectRatio }}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;

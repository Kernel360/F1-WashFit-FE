import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import Flex from '@shared/flex/Flex';
import Text from '@shared/text/Text';

import { IRecommandList } from './types/carousel.type';

function RecommandList({ recommandListData }: { recommandListData: IRecommandList[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={4}
      autoplay={{ delay: 2000 }}
      loop
      speed={2000}
      loopAdditionalSlides={1}
    >
      {recommandListData.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <Flex justify="center" align="center" direction="column">
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default RecommandList;

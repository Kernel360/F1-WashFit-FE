'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import DropdownArrow from '@components/icons/DropdownArrow';
import Star from '@components/icons/Star';
import useProductDetails from '@remote/queries/product/useProductDetails';
import Accordion from '@shared/accordion/Accordion';
import AccordionBody from '@shared/accordion/body/AccordionBody';
import AccordionHeader from '@shared/accordion/header/AccordionHeader';
import AccordionItem from '@shared/accordion/item/AccordionItem';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Loader from '@shared/loader/Loader';
import Radio from '@shared/radio/Radio';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

type Type = {
  [key: string]: {
    [key: number]: string
  }
};

const TYPE: Type = {
  세정제: {
    0: '/assets/세정제(1).webp',
    1: '/assets/세정제(2).webp',
    2: '/assets/세정제(3).webp',
    3: '/assets/세정제(4).webp',
    4: '/assets/세정제(5).webp',
  },
  코팅제: {
    0: '/assets/코팅제(1).webp',
    1: '/assets/코팅제(2).webp',
    2: '/assets/코팅제(3).webp',
    3: '/assets/코팅제(4).webp',
    4: '/assets/코팅제(5).webp',
  },
};

function ProductDetailsPage() {
  const getRandomNumber = useCallback(() => {
    return Math.floor(Math.random() * 5); // 0 이상 5 미만의 난수를 생성하고 소수점 이하 버림
  }, []);
  const path = usePathname();
  let productNo = Number(path.split('/').at(-1));
  const [type, setType] = useState('info');

  const handleType = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  }, []);

  if (productNo == null) {
    productNo = 1;
  }
  const { data: productDetailsData, isLoading } = useProductDetails(productNo);

  if (isLoading || !productDetailsData) {
    return <Loader />;
  }

  const {
    brand,
    productName,
    upperItem,
    grade,
    reviewCnt,
    companyName,
    productType,
    manufactureType,
    manufactureMethod,
    weight,
    reportNumber,
    mainSubstance,
    usage,
    usagePrecaution,
    firstAid,
    violationInfo,
    item,
  } = productDetailsData.value;

  return (
    <>
      <Header type="product" className={cx('product')} />
      <div style={{ aspectRatio: 1, position: 'relative' }}>
        <Image
          src={item === '코팅제' ? TYPE.코팅제[getRandomNumber()] : TYPE.세정제[getRandomNumber()]}
          alt="상품 이미지"
          fill
        />
      </div>
      <Flex direction="column" className={cx('productInfo')}>
        <Text color="primary500" typography="t6">{brand}</Text>
        <Text typography="t4" bold>{productName}</Text>
        <Flex align="center">
          <Text color="gray500" typography="t6">{upperItem}</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">•</Text>
          <Spacing size={4} direction="vertical" />
          <Star size={14} />
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">{grade}</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">{reviewCnt}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Radio type="product" label="제품정보" value="info" name="product" defaultChecked onChange={handleType} />
        <Radio type="product" label="리뷰" value="review" name="product" onChange={handleType} />
      </Flex>
      {type === 'info' && (
        <Accordion defaultActiveItems={['basicInformation']}>
          <AccordionItem itemName="basicInformation">
            <AccordionHeader
              className={cx('accordionHeader')}
              openIcon={<DropdownArrow isRotate={false} color="gray400" />}
              closeIcon={<DropdownArrow isRotate color="gray400" />}
            >
              <Text typography="t5" color="gray700">기본정보</Text>
            </AccordionHeader>
            <AccordionBody
              className={cx('accordionBody')}
            >
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>제품명</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{productName}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>업체명</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{companyName}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>제품구분</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{productType}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>품목</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{upperItem}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>제조구분</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{manufactureType}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>제조방식</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{manufactureMethod}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>중량</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{weight}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>신고번호</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{reportNumber}</Text>
              </Flex>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem itemName="productDetails" className={cx('accordionItem')}>
            <AccordionHeader
              className={cx('accordionHeader')}
              openIcon={<DropdownArrow isRotate={false} color="gray400" />}
              closeIcon={<DropdownArrow isRotate color="gray400" />}
            >
              <Text typography="t5" color="gray700">제품 상세</Text>
            </AccordionHeader>
            <AccordionBody
              className={cx('accordionBody')}
            >
              <Flex align="flex">
                <Text typography="t7" className={cx('infoTitle')}>상세성분</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{mainSubstance}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>제품용도</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{usage}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>주의사항</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{usagePrecaution}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>응급조치</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{firstAid}</Text>
              </Flex>
              <Flex>
                <Text typography="t7" className={cx('infoTitle')}>특이사항</Text>
                <Spacing size={8} direction="vertical" />
                <Text color="gray600" typography="t6" className={cx('infoDescription')}>{violationInfo}</Text>
              </Flex>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      )}
      {type === 'review' && (
        <Flex direction="column" justify="center" align="center">
          <Spacing size={50} />
          <Text typography="t4">리뷰 기능은 아직 준비 중이에요</Text>
          <Spacing size={4} />
          <Text typography="t6" color="gray500">빠른 시일 내에 찾아뵙겠습니다</Text>
        </Flex>
      )}
    </>
  );
}

export default ProductDetailsPage;

'use client';

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

function ProductDetailsPage() {
  const path = usePathname();
  let productNo = Number(path.split('/').at(-1));

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
  } = productDetailsData.value;

  // TODO: 리뷰 기능 추가
  return (
    <>
      <Header type="product" className={cx('product')} />
      <Image src="/assets/product.png" alt="상품 이미지" width={375} height={375} />
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
        <Radio type="product" label="제품정보" value="info" name="product" defaultChecked />
        <Radio type="product" label="리뷰" value="review" name="product" />
      </Flex>
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
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ProductDetailsPage;

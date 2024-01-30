'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';

import DropdownArrow from '@components/icons/DropdownArrow';
import Star from '@components/icons/Star';
import Accordion from '@shared/accordion/Accordion';
import AccordionBody from '@shared/accordion/body/AccordionBody';
import AccordionHeader from '@shared/accordion/header/AccordionHeader';
import AccordionItem from '@shared/accordion/item/AccordionItem';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Radio from '@shared/radio/Radio';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function ProductDetailsPage() {
  // TODO: 리뷰 기능 추가
  return (
    <>
      <Header type="product" className={cx('product')} />
      <Image src="/assets/product.png" alt="상품 이미지" width={375} height={375} />
      <Flex direction="column" className={cx('productInfo')}>
        <Text color="primary500" typography="t6">카믹스</Text>
        <Text typography="t4" bold>아머올 세차용품 스피드 왁스 스프레이</Text>
        <Flex align="center">
          <Text color="gray500" typography="t6">코팅제</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">•</Text>
          <Spacing size={4} direction="vertical" />
          <Star size={14} />
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">4.5</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="gray500" typography="t6">(20)</Text>
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
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>불스원 블랙홀 탈취제</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>업체명</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>(주)불스원/직접생산</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>제품구분</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>대표</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>품목</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>탈취제/방향 - 탈취제품</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>제조구분</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>제포</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>제조방식</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>직접생산</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>중량</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>20~100(g)</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>신고번호</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>GB23-13-0401</Text>
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
              <Text typography="t7" className={cx('infoTitle')}>상세 성분</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>리날로올, (E)-3,7-Dimethyl-2,6-octadien-1-ol,2-Methoxy-4-(2-propenyl)phenol; Eugenol, 4-Allyl-2-methoxyphenol, 4-Allyguaiacol,3,7-Dimethyl-6-octen-1-ol; Citronellol,d-리모넨,p-멘타-1,8-다이엔,리날로올,시트랄,3,7,7-트리메틸바이사이클로[4.1.0]헵-3-텐,d-리모넨,p-멘타-1,8-다이엔,아세트산 에틸</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>제품용도</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>자동차용-실내용,일반용-실내공간용,일반용-밀폐공간용-옷장, 신발장</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>주의사항</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>사용하시기 전에 표시 사항 및 사용방법을 확인하고 사용 하시오.</Text>
            </Flex>
            <Flex>
              <Text typography="t7" className={cx('infoTitle')}>응급조치</Text>
              <Spacing size={8} direction="vertical" />
              <Text color="gray600" typography="t6" className={cx('infoDescription')}>피부자극 반응 또는 붉은 반점이 나타나면 의학적 조치를 받으시오.</Text>
            </Flex>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ProductDetailsPage;

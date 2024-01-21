import classNames from 'classnames/bind';
import Image from 'next/image';

import Star from '@components/icons/Star';
import Flex from '@shared/flex/Flex';
import Header from '@shared/header/Header';
import Radio from '@shared/radio/Radio';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function SuppliesPage() {
  return (
    <>
      <Header isDisplayLogo={false} displayRightIconType="heartShare" className={cx('product')} />
      <Image src="/assets/product.png" alt="상품 이미지" width={375} height={375} />
      <Flex direction="column" className={cx('productInfo')}>
        <Text color="primary" typography="t6">카믹스</Text>
        <Text typography="t4" bold>아머올 세차용품 스피드 왁스 스프레이</Text>
        <Flex align="center">
          <Text color="tertiary" typography="t6">코팅제</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="tertiary" typography="t6">•</Text>
          <Spacing size={4} direction="vertical" />
          <Star size={14} />
          <Spacing size={4} direction="vertical" />
          <Text color="tertiary" typography="t6">4.5</Text>
          <Spacing size={4} direction="vertical" />
          <Text color="tertiary" typography="t6">(20)</Text>
        </Flex>
      </Flex>
      <Flex>
        <Radio type="product" label="제품정보" value="info" name="product" />
        <Radio type="product" label="리뷰" value="review" name="product" />
      </Flex>
    </>
  );
}

export default SuppliesPage;

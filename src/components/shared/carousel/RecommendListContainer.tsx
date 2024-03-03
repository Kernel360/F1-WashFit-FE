'use client';

import React from 'react';

import useRecommendProducts from '@remote/queries/home/useRecommendProducts';
import Skeleton from '@shared/skeleton/Skeleton';

import RecommendList from './RecommendList';

function RecommendListContainer() {
  const { data: recommendProductsData, isLoading } = useRecommendProducts();

  if (isLoading) {
    return <Skeleton width="100%" height="172px" />;
  }

  return (
    <RecommendList recommendProductsData={recommendProductsData!} />
  );
}

export default RecommendListContainer;

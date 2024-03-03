'use client';

import React from 'react';

import useRecommendProducts from '@remote/queries/home/useRecommendProducts';

import RecommendList from './RecommendList';

function RecommendListContainer() {
  const { data: recommendProductsData } = useRecommendProducts();
  return (
    <RecommendList recommendProductsData={recommendProductsData!} />
  );
}

export default RecommendListContainer;

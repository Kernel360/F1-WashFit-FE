import { CarInfoType, IinfoOptions } from '@remote/api/types/my-page';

const mappingCarDetails = (info: CarInfoType) => {
  const carOptions = {
    segment_options: info.value.segment_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    carType_options: info.value.carType_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    color_options: info.value.color_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    driving_options: info.value.driving_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    parking_options: info.value.parking_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
  };

  const mappingCarOptions: IinfoOptions = {
    segment_options: {
      16: '경차',
      17: '소형',
      18: '중형',
      19: '대형',
    },
    carType_options: {
      11: '세단',
      12: '해치백',
      13: 'SUV',
      14: '기타',
    },
    parking_options: {
      40: '실내/지하',
      41: '노상',
      42: '필로티',
    },
    driving_options: {
      36: '도심',
      37: '고속',
      38: '복합',
    },
    color_options: {
      21: '흰색',
      22: '쥐색',
      23: '검정색',
      24: '빨간색',
      25: '노란색',
      26: '초록색',
      27: '파란색',
      28: '기타',
    },
  };

  return { carOptions, mappingCarOptions };
};

export default mappingCarDetails;

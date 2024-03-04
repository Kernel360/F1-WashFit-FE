import { CarWashInfoType, IinfoOptions } from '@/remote/api/types/my-page';

const mappingCarWashDetails = (info: CarWashInfoType) => {
  const carWashOptions = {
    interest_options: info.value.interest_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    cost_options: info.value.cost_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
    frequency_options: info.value.frequency_options.map((option) => {
      return {
        label: option.description,
        value: option.codeNo,
      };
    }),
  };

  const mappingCarWashOptions: IinfoOptions = {
    interest_options: {
      44: '도장',
      45: '타이어',
      46: '휠',
      47: '실내',
    },
    cost_options: {
      63: '월 평균 1~3만원',
      64: '월 평균 4~6만원',
      65: '월 평균 7~9만원',
      66: '월 평균 10만원 이상',
    },
    frequency_options: {
      58: '월 평균 1회',
      59: '월 평균 2회',
      60: '월 평균 3회',
      61: '월 평균 4회',
    },
  };

  return { carWashOptions, mappingCarWashOptions };
};

export default mappingCarWashDetails;

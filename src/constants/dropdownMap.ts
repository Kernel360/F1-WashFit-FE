export const GENDER_MAP = {
  MALE: '남성',
  FEMALE: '여성',
} as const;

export const AGE_MAP = {
  AGE_20: '20대 이하',
  AGE_30: '30대',
  AGE_40: '40대',
  AGE_50: '50대',
  AGE_60: '60대 이상',
} as const;

export type GenderType = keyof typeof GENDER_MAP;
export type AgeType = keyof typeof AGE_MAP;

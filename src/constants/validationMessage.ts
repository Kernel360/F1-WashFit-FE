const VALIDATION_MESSAGE_MAP: {
  [key: string]: {
    value?: RegExp,
    message: string
  }
} = {
  id: {
    value: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
    message: '영문 소문자, 숫자 조합 8자 이상 입력해주세요',
  },
  email: {
    value: /^[_a-zA-Z0-9-.]+@[.a-zA-Z0-9-]+\.[a-zA-Z]+$/,
    message: '이메일 형식을 확인해주세요',
  },
  password: {
    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
    message: '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.',
  },
  confirmPassword: {
    message: '비밀번호를 확인해주세요.',
  },
  failedLogin: { message: '아이디 또는 비밀번호를 확인해주세요.' },
  failedFindId: { message: '잘못된 이메일입니다.' },
  failedFindPassword: { message: '아이디가 존재하지 않습니다.' },
  failedChangePassword: { message: '비밀번호를 다시 설정해 주세요.' },
  duplicationId: { message: '중복된 아이디입니다.' },
  duplicationEmail: { message: '중복된 이메일입니다.' },
} as const;

export default VALIDATION_MESSAGE_MAP;

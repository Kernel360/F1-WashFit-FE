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
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
    message: '8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.',
  },
  confirmingPassword: {
    message: '비밀번호를 확인해주세요.',
  },
};

export default VALIDATION_MESSAGE_MAP;

export interface ConfirmationType {
  title: string;
  description: string;
  options: { [key: string]: string };
}

export const COMPLETE_SIGNUP:ConfirmationType = {
  title: '회원가입이\n완료되었습니다.',
  description: '부가정보를 입력하시면, 차량별 맟춤\n차량용품 추천 서비스를 제공받을 수 있습니다.',
  options: {
    '': '홈',
    login: '로그인',
  },
};

export const COMPLETE_FIND_ID:ConfirmationType = {
  title: '회원님의 이메일로\n아이디가 전송되었습니다.',
  description: '',
  options: {
    login: '로그인',
  },
};

export const COMPLETE_CHANGE_PW:ConfirmationType = {
  title: '비밀번호 변경이\n완료되었습니다.',
  description: '',
  options: {
    login: '로그인',
  },
};

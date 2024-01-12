import userEvent from '@testing-library/user-event';
import { render, screen } from '@tests/test-utils';
import { describe, test, expect } from 'vitest';

import SignupPage from './page';

describe('회원가입 페이지 로직', () => {
  test('유효성 검사를 통과하지 못한 아이디는 영문 소문자, 숫자 조합 8자 이상 입력해주세요 문구 표시', async () => {
    const user = userEvent.setup();

    render(<SignupPage />);

    const idInput = screen.getByPlaceholderText('아이디');
    const nullIdLabel = screen.queryByText('영문 소문자, 숫자 조합 8자 이상 입력해주세요');

    await user.clear(idInput);
    await user.type(idInput, 'wasa1');

    expect(nullIdLabel).not.toBeInTheDocument();
    await user.tab();

    const idLabel = screen.getByText('영문 소문자, 숫자 조합 8자 이상 입력해주세요');
    expect(idLabel).toBeInTheDocument();
  });

  test('아이디, 비밀번호, 비밀번호 확인, 이메일 유효성 검사 통과 시 버튼 활성화', async () => {
    const user = userEvent.setup();

    render(<SignupPage />);

    const idInput = screen.getByPlaceholderText('아이디');
    const passwordInput = screen.getByPlaceholderText('비밀번호');
    const confirmPasswordInput = screen.getByPlaceholderText('비밀번호 확인');
    const emailInput = screen.getByPlaceholderText('이메일');

    const signUpButton = screen.getByRole('button', { name: '약관 동의하러 가기' });

    expect(signUpButton).toBeDisabled();

    await user.clear(idInput);
    await user.type(idInput, 'washpedia1');

    await user.clear(passwordInput);
    await user.type(passwordInput, 'asdf!@#$A1');

    await user.clear(confirmPasswordInput);
    await user.type(confirmPasswordInput, 'asdf!@#$A1');

    await user.clear(emailInput);
    await user.type(emailInput, 'washpedia@gmail.com');

    expect(signUpButton).not.toBeDisabled();
  });
});

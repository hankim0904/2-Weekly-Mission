import { Controller, useForm } from 'react-hook-form';
import { useTokenRedirect } from '@/hooks/useTokenRedirect';

import Input from './common/Input';
import Button from './common/Button';
import PasswordEyeButton from './common/PasswordEyeButton';
import { SignForm } from '@/styles/SignForm';

import { SIGN_ERROR_MESSAGE } from '@/stores/constants';
import { useMutation } from '@tanstack/react-query';
import { postCheckEmailDuplicateApi, postSignupApi } from '@/api/apiCollection';
import { EnteredEmail, EnteredSignInfo } from '@/api/apiType';
import { useEffect, useState } from 'react';
import { saveAccessToken, saveRefreshToken } from '@/utils/manageTokenInfo';

const SignupForm = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: '', password: '', confirmedPassword: '' },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { mutateAsync: mutateAsyncForDuplicateEmail } = useMutation({
    mutationFn: (enteredEmail: EnteredEmail) =>
      postCheckEmailDuplicateApi(enteredEmail),
  });

  const { mutateAsync: mutateAsyncForToken } = useMutation({
    mutationFn: (enteredSignupInfo: EnteredSignInfo) =>
      postSignupApi(enteredSignupInfo),
  });

  useTokenRedirect(accessToken);

  const postSignup = async (enteredSignupInfo: EnteredSignInfo) => {
    try {
      const tokens = await mutateAsyncForToken(enteredSignupInfo);
      if (tokens?.accessToken) {
        setAccessToken(tokens.accessToken);
        setRefreshToken(tokens.refreshToken);
      }
    } catch (error) {
      console.error('Error while signing up:', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      saveAccessToken(accessToken);
      saveRefreshToken(refreshToken);
    }
  }, [accessToken, refreshToken]);

  return (
    <SignForm onSubmit={handleSubmit(postSignup)}>
      <div className="sign-input">
        <div className="sign-input-element">
          <label>이메일</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: SIGN_ERROR_MESSAGE.enterEmail,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: SIGN_ERROR_MESSAGE.checkFormEmail,
              },
              validate: {
                alreadyExist: async (value) => {
                  const enteredEmail = { email: value };
                  try {
                    const response = await mutateAsyncForDuplicateEmail(
                      enteredEmail
                    );
                    return response?.isUsableEmail
                      ? true
                      : SIGN_ERROR_MESSAGE.takenEmail;
                  } catch (error) {
                    return SIGN_ERROR_MESSAGE.takenEmail;
                  }
                },
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="text"
                placeholder="이메일을 입력해 주세요."
                $isError={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="sign-input-element">
          <label>비밀번호</label>
          <Controller
            control={control}
            name="password"
            rules={{
              required: SIGN_ERROR_MESSAGE.enterPassword,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
                message: SIGN_ERROR_MESSAGE.checkFormPassword,
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="password"
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                rightContent={(props) => <PasswordEyeButton {...props} />}
                $isError={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="sign-input-element">
          <label>비밀번호 확인</label>
          <Controller
            control={control}
            name="confirmedPassword"
            rules={{
              validate: {
                isMatch: (value) => {
                  if (value !== watch('password')) {
                    return SIGN_ERROR_MESSAGE.diffWithPassword;
                  }
                  return true;
                },
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="password"
                placeholder={'비밀번호와 일치하는 값을 입력해 주세요.'}
                rightContent={(props) => <PasswordEyeButton {...props} />}
                $isError={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>
      <Button colorVariant="default">회원가입</Button>
    </SignForm>
  );
};

export default SignupForm;

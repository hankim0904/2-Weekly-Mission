import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTokenRedirect } from '@/hooks/useTokenRedirect';

import Input from './common/Input';
import Button from './common/Button';
import PasswordEyeButton from './common/PasswordEyeButton';
import { SignForm } from '@/styles/SignForm';

import { SIGN_ERROR_MESSAGE } from '@/stores/constants';
import { useMutation } from '@tanstack/react-query';
import { postSigninApi } from '@/api/api';
import { EnteredSignInfo } from '@/types/apiType';
import { saveAccessToken, saveRefreshToken } from '@/utils/manageTokenInfo';

const SigninForm = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const { control, handleSubmit, setError } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

  const { error: signinSubmitError, mutateAsync: mutateAsyncForToken } =
    useMutation({
      mutationFn: (enteredSigninInfo: EnteredSignInfo) =>
        postSigninApi(enteredSigninInfo),
    });

  useTokenRedirect(accessToken);

  const postSignin = async (enteredSigninInfo: EnteredSignInfo) => {
    try {
      const tokens = await mutateAsyncForToken(enteredSigninInfo);
      if (tokens?.accessToken) {
        setAccessToken(tokens.accessToken);
        setRefreshToken(tokens.refreshToken);
      }
    } catch (error) {
      console.error('Error while signing in:', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      saveAccessToken(accessToken);
      saveRefreshToken(refreshToken);
    }
  }, [accessToken, refreshToken]);

  useEffect(() => {
    if (signinSubmitError) {
      setError('email', {
        type: 'invalid',
        message: SIGN_ERROR_MESSAGE.wrongEmail,
      });
      setError('password', {
        type: 'invalid',
        message: SIGN_ERROR_MESSAGE.wrongPassword,
      });
    }
  }, [signinSubmitError, setError]);

  return (
    <SignForm onSubmit={handleSubmit(postSignin)}>
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
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                rightContent={(props) => <PasswordEyeButton {...props} />}
                $isError={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>
      <Button colorVariant="default">로그인</Button>
    </SignForm>
  );
};

export default SigninForm;

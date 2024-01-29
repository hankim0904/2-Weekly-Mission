import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useSignin from '@/hooks/useSignin';
import { useTokenRedirect } from '@/hooks/useTokenRedirect';

import Input from './common/Input';
import Button from './common/Button';
import PasswordEyeButton from './common/PasswordEyeButton';
import { SignForm } from '@/styles/SignForm';

import { SIGN_ERROR_MESSAGE } from '@/stores/constants';

const SigninForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

  const { execute, error, apiData } = useSignin({
    email: watch('email'),
    password: watch('password'),
  });
  useTokenRedirect(apiData?.data?.accessToken);

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'invalid',
        message: SIGN_ERROR_MESSAGE.wrongEmail,
      });
      setError('password', {
        type: 'invalid',
        message: SIGN_ERROR_MESSAGE.wrongPassword,
      });
    }
  }, [error, setError]);

  return (
    <SignForm onSubmit={handleSubmit(execute)}>
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

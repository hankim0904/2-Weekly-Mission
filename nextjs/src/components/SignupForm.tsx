import { Controller, useForm } from 'react-hook-form';
import { useTokenRedirect } from '@/hooks/useTokenRedirect';

import Input from './common/Input';
import Button from './common/Button';
import { SignForm } from '@/styles/SignForm';

import { SIGN_ERROR_MESSAGE } from '@/stores/constants';
import useSignup from '@/hooks/useSignup';
import { useCheckEmailDuplicate } from '@/hooks/useCheckEmailDuplicate';

const SignupForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: '', password: '', confirmedPassword: '' },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const { execute: checkEmailDuplicate } = useCheckEmailDuplicate(watch('email'));

  const { execute: signUp, apiData } = useSignup({
    email: watch('email'),
    password: watch('password'),
  });
  useTokenRedirect(apiData?.data?.accessToken);

  return (
    <SignForm onSubmit={handleSubmit(signUp)}>
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
                alreadyExist: async () => {
                  const response = await checkEmailDuplicate();
                  if (!response?.data?.isUsableNickname) {
                    return SIGN_ERROR_MESSAGE.takenEmail;
                  }
                  return true;
                },
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                placeholder="이메일을 입력해 주세요."
                isPassword={false}
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
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                isPassword={true}
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
                placeholder={'비밀번호와 일치하는 값을 입력해 주세요.'}
                isPassword={true}
                $isError={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>
      <Button variant="default">회원가입</Button>
    </SignForm>
  );
};

export default SignupForm;

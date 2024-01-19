import SigninForm from '@/components/SigninForm';
import Oauth from '@/components/common/Oauth';
import SignHeader from '@/components/common/SignHeader';
import SignLayout from '@/components/common/SignLayout';

function SigninPage() {
  return (
    <SignLayout
      header={<SignHeader message="회원이 아니신가요?" link={{ text: '회원 가입하기', href: '/signup' }} />}
      form={<SigninForm />}
      oauth={<Oauth />}
    />
  );
}

export default SigninPage;

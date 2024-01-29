import SignupForm from '@/components/SignupForm';
import Oauth from '@/components/common/Oauth';
import SignHeader from '@/components/common/SignHeader';
import SignLayout from '@/components/common/SignLayout';

function SignupPage() {
  return (
    <SignLayout
      header={<SignHeader message="이미 회원이신가요?" link={{ text: '로그인 하기', href: '/signin' }} />}
      form={<SignupForm />}
      oauth={<Oauth />}
    />
  );
}

export default SignupPage;

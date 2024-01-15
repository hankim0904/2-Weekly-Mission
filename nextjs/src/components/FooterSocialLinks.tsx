import { SOCIAL_LIST } from '@/stores/constants';
import Image from 'next/image';

function FooterSocialLinks({ target, rel }: { target: string; rel: string }) {
  return (
    <>
      {SOCIAL_LIST.map(({ id, link, icon, name }) => {
        return (
          <a key={id} href={link} target={target} rel={rel}>
            <Image src={icon} width={20} height={20} alt={name} />
          </a>
        );
      })}
    </>
  );
}

export default FooterSocialLinks;

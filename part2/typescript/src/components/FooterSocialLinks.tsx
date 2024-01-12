import { SOCIAL_LIST } from '../stores/constants';

function FooterSocialLinks({ target, rel }: { target: string; rel: string }) {
  return (
    <>
      {SOCIAL_LIST.map(({ id, link, icon, name }) => {
        return (
          <a key={id} href={link} target={target} rel={rel}>
            <img src={icon} alt={name} />
          </a>
        );
      })}
    </>
  );
}

export default FooterSocialLinks;

import styled from 'styled-components';
import FooterSocialLinks from '../FooterSocialLinks';

const StyledFooter = styled.footer`
  margin-top: 6rem;
  background-color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;

  .footer-notice {
    height: 16rem;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 6.4rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .copyright {
    font-family: Arial;
    color: #676767;
  }

  .footer-links {
    display: flex;
    gap: 3rem;
  }

  .footer-sns {
    display: flex;
    gap: 1.2rem;
  }

  .footer-sns img {
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    margin-top: 4rem;

    .footer-notice {
      width: 100%;
      padding: 3.2rem 3.2rem;
      margin: 0;
      display: grid;
      grid-template-areas:
        'footer-links sns'
        'copyright .';
      row-gap: 6rem;
    }

    .copyright {
      grid-area: copyright;
    }

    .footer-links {
      grid-area: footer-links;
    }

    .footer-sns {
      grid-area: sns;
    }
  }
`;

const FooterLink = styled.a`
  font-family: Arial;
  color: #cfcfcf;
`;

interface FooterLinksProps {
  children: React.ReactNode;
  href: string;
}

function FooterLinks({ children, href }: FooterLinksProps) {
  return (
    <FooterLink className="footer-link" href={href}>
      {children}
    </FooterLink>
  );
}

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-notice">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <FooterLinks href="/privacy.html">Privacy Policy</FooterLinks>
          <FooterLinks href="/faq.html">FAQ</FooterLinks>
        </div>
        <div className="footer-sns">
          <FooterSocialLinks target="_blank" rel="noreferrer" />
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;

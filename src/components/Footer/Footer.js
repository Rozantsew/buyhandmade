import { StyledFooter, PricacyWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <PricacyWrapper>
        <ul>
          <li>Polityka Prywatności</li>
          <li>Polityka cookies</li>
          <li>O nas</li>
          <li>Regulamin</li>
          <li>Co tam</li>
        </ul>
      </PricacyWrapper>
    </StyledFooter>
  );
};

export default Footer;

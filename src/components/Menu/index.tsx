import React from 'react';
import logoImg from '../../assets/logo.svg';
import insta from '../../assets/pedra_logo1.png';
import facebook from '../../assets/facebook.png';
import whats from '../../assets/whats.png';

import GlobalStyle, {
  Button,
  NavContainer,
  Logo,
  LogoLink,
  ButtonAdmin,
} from './styles';

const Menu = () => {
  return (
    <>
      <GlobalStyle />
      <NavContainer>
        <LogoLink to="/">
          <Logo className="Logo" src={logoImg} alt="PedãoAutomóveis" />
        </LogoLink>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5519981573022" target="_blank">
          <Logo className="Logo" src={whats} alt="PedãoAutomóveis" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Pedr%C3%A3o-Autom%C3%B3veis-110303973951289" target="_blank">
          <Logo className="Logo" src={facebook} alt="PedãoAutomóveis" />
          </a>
        </div>
           <div>
          <a href="https://www.instagram.com/pedrao.automoveis/" target="_blank">
          <Logo className="Logo" src={insta} alt="PedãoAutomóveis" />
          </a>
        </div>
        <div>
          {/* <Button to="/register/video">Fale Conosco</Button> */}
        </div>
        <div>
          {/* <ButtonAdmin to="/admin">Admin</ButtonAdmin> */}
        </div>
          <LogoLink to="/register/video">
          </LogoLink>
      </NavContainer>
    </>
  );
};

export default Menu;

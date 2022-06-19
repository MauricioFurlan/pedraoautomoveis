import React from 'react';
import { FooterBase } from './styles';
import MapPage from './MapPage';

const Footer = () => {
  return (
    <FooterBase>
      <p>
        Pedrão Automóveis -
        Avenida Visconde de Indaiatuba, 381 Vila Vitória I, Indaiatuba - SP
      </p>
      <MapPage></MapPage>
    </FooterBase>
  );
};

export default Footer;

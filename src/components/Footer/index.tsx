import React from 'react';
import { FooterBase, MapImage, Image } from './styles';
import mapa from '../../assets/map_b.PNG';
import mapa_c from '../../assets/mapa_c.PNG';

function isMobilie() {
  if (navigator.userAgentData.mobile) {
    return mapa_c
  }
  return mapa
}
const Footer = () => {
  const map = isMobilie()
  return (
    <FooterBase>
      <p>
        Pedrão Automóveis -
        Avenida Visconde de Indaiatuba, 381 Vila Vitória I, Indaiatuba - SP
      </p>
      <MapImage>
        <a href="https://www.google.com/maps/dir/-23.0934336,-47.2020418/Pedr%C3%A3o+Autom%C3%B3veis,+Av.+Visc.+de+Indaiatuba,+381+-+Vila+Vitoria+I,+Indaiatuba+-+SP,+13338-010/@-23.0911133,-47.2039706,17z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x94c8b5c55533f683:0x70ac5378f7b13313!2m2!1d-47.2013649!2d-23.088793!3e0">
        <Image src={map}></Image>
        </a>
      </MapImage>
      {/* <MapPage></MapPage> */}
    </FooterBase>
  );
};

export default Footer;

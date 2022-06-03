import React from 'react';
import SlickSlider from 'react-slick';
import {
  ArrowIosForwardOutline,
  ArrowIosBackOutline,
} from '@styled-icons/evaicons-outline';
import { Container, ArrowContainer } from './styles';

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite: true,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
          slidesToScroll: 1,
          draggable:false,
          nextArrow: (
            <ArrowContainer>
              <ArrowIosForwardOutline size={22} color={'var(--blue)'} />
            </ArrowContainer>
          ),
          prevArrow: (
            <ArrowContainer>
              <ArrowIosBackOutline size={22} color={'var(--blue)'} />
            </ArrowContainer>
          ),
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;

import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--gray);
  border-top: 2px solid var(--blue);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const MapImage = styled.div`
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`
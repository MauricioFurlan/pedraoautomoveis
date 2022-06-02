import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const FirstImageContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 355px;
  height: 200px;
  background-image: ${({ url }: { url: string }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;
  border-radius: 6px;
  > span {
    visibility: hidden;
  }`

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 355px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  background-image: ${({ url }: { url: string }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;
  border-radius: 6px;
  > span {
    visibility: hidden;
  }

  &:hover,
  &:focus {
    > span {
      visibility: visible;
      color: var(--white);
      padding-left: 5px;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: 0px;
      left: 0px;
      padding: 10px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ModalContent = styled.div`
  background: var(--blue);
  padding: 25px;
  width: 55vh;
  position: relative;
  overflow: auto;
  outline: none;
  > span {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 800px) {
    min-width: 0;
    width: 100vh;
    height: 100vh;
    > span {
      position: absolute;
      top: 10%;
      right: 10%;
      cursor: pointer;
      color: white;
    }
  }
`;

export const ModalContainer = styled(Modal)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;


export const Text = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
  `;

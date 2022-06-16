import React, { useState } from 'react';
import { VideoCardContainer, ModalContent, ModalContainer, Text } from './styles';
import Carousel from "react-elastic-carousel";
import login from '../../../../assets/login.png';
import whats from '../../../../assets/whatsapp.svg';
import './cars.css'

interface Item {
  item: string;
}
const VideoCard = ({
  videoTitle,
  videoURL,
  videoFotos,
  videoDescrition,
  videoPreco,
  videoDestaque,
}: {
  videoFotos: [];
  videoTitle: string;
  videoURL: string;
  videoDescrition: string;
  videoPreco: string;
  videoDestaque: string;
}) => {
  const getYouTubeId = (youtubeURL: string) => {
    return youtubeURL.replace(
      /^.((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]).*/,
      '$7',
    );
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [arrow, setArrow] = useState(true);

  const img1 = videoFotos
  // const image = `https://img.youtube.com/vi/${getYouTubeId(
  //   videoURL,
  //   )}/maxresdefault.jpg`;
    const breakPoints = [
  { width: 1, itemsToShow: 1 ,slidesToScroll: 1 },
  { width: 550, itemsToShow: 1, slidesToScroll: 1 },
  { width: 768, itemsToShow: 1, slidesToScroll: 1, },
  { width: 1200, itemsToShow: 1 , slidesToScroll: 1},
];

const importAll = (r: __WebpackModuleApi.RequireContext) =>
	r.keys().map((fileName: string) => ({
		slug: fileName.substr(2).replace(/\/index\.mdx$/, ''),
		module: r(fileName)
	}))
// function ResponsiveImage( src: Item, width: number) {
//   return (
//     <div
//       style={ { 
//         width,
//       } }
//       className="responsive-image">
//       <div style={ {
//           paddingBottom: ( 800 / width * 100 ) + '%'
//         } } />
//       <img
//         src={ src }
//         className="responsive-image__image" />
//     </div>
//   );
// }

importAll(require.context('../../../../../public/images/fox', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/kiwd', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/renegade', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/up', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/astra', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/onix', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/hilux', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/hb20', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/brasilia', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/fit', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('../../../../../public/images/amarok', false, /\.(png|jpe?g|svg)$/));

const whatsMsg = `https://api.whatsapp.com/send?1=pt_BR&phone=5519981573022&text=Olá Pedrão, gostei do ${videoTitle}`
  return (
    <>
    
      <VideoCardContainer
        url={videoDestaque}
        title={videoTitle}
        onClick={() => setModalIsOpen(!modalIsOpen)}
        >
        <span>{videoTitle}</span>
      </VideoCardContainer>
      {modalIsOpen && (
        <ModalContainer open={modalIsOpen}>
          <ModalContent>
            <span onClick={() => setModalIsOpen(!modalIsOpen)}>&#10060;</span>
        <main>
            <article className="teacher-item">
              
                <header>
                    <img 
                        src={login}
                        alt="Pedrão"/>
                    <div>
                        <strong>{videoTitle}</strong>
                        <span>Disponível</span>
                    </div>
                </header>
          <Carousel
          showArrows={arrow}
          breakPoints={breakPoints}>
          {img1.map(item => (
      <div>
      <img className="responsive-image" src={ item } />
      </div>
      ))}
        </Carousel>
                <p className="textDescription">{videoDescrition}</p>

                <footer>
                    <p><strong>R${videoPreco}</strong>
                    </p>
                    <a href={whatsMsg} className="button" target="_blank">
                    <img src={whats} alt="WhatsApp" /> Contato
                    </a>
                </footer>
              </article>
            </main>
          </ModalContent>

        </ModalContainer>
      )}
    </>
  );
};

export default VideoCard;
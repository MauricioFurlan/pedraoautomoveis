import React from 'react';
import { VideoCardGroupContainer, Title, SliderItem } from './styles';
import Slider from './components/Slider';
import VideoCard from './components/VideoCard';
import { List } from 'material-ui';


interface iVideos {
  id: number;
  categoryId: number;
  title: string;
  url: string;
  description: string;
  fotos: [];
  preco: string;
  destaque: string;
}

interface iCategory {
  id: number;
  title: string;
  videos: iVideos[];
}

const Carousel = ({
  ignoreFirstVideo,
  category,
}: {
  ignoreFirstVideo?: boolean;
  category: iCategory;
  key?: number | string;
}) => {
  const categoryTitle = category.title;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title>{categoryTitle}</Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          return (
            <SliderItem key={video.id}>
              <VideoCard videoTitle={video.title} videoURL={video.url} videoFotos={video.fotos} videoDescrition={video.description} videoPreco={video.preco} videoDestaque={video.destaque}/>
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
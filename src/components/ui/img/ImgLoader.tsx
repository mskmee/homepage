import { ImgHTMLAttributes, useState } from 'react';
import { Loader } from '../..';

export const ImgLoader = ({ ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const setImageToLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <>
      {!isImageLoaded && <Loader />}
      <img {...props} onLoad={setImageToLoad} />
    </>
  );
};

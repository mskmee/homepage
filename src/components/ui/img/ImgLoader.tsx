import { ImgHTMLAttributes, useState } from 'react';
import { Loader } from '../..';
import styles from './ImgLoader.module.css';
import classNames from 'classnames';

export const ImgLoader = ({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const setImageToLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <>
      {!isImageLoaded && <Loader />}
      <img className={classNames(className, styles.img)} {...props} onLoad={setImageToLoad} />
    </>
  );
};

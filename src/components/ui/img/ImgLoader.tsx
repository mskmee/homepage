import { ImgHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import { Loader } from '@/components';
import styles from './ImgLoader.module.css';

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

import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classNames(className, styles.btn)} {...props}>
      {children}
    </button>
  );
};

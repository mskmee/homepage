import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

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

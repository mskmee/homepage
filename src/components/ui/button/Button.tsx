import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const classNames = `${className} ${styles.btn}`;
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

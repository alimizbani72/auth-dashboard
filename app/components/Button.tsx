'use client';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from '../styles/button.module.scss';

type Props = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={styles.button}
      {...rest} 
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
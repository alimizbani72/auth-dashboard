'use client';
import styles from '../styles/button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean
};

export default function Button({ children, onClick, disabled }: Props) {
  return (
    <button className={styles.button} onClick={onClick}  disabled={disabled}>
      {children}
    </button>
  );
}
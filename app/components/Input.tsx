'use client';
import styles from '../styles/input.module.scss';

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function Input({ value, onChange, placeholder }: Props) {
  return (
    <input
      type="tel"
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
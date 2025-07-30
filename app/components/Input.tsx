'use client';
import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styles from '../styles/input.module.scss';

type Props = {
  value: string
  onChange: (val: string) => void
  placeholder?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, placeholder, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="tel"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
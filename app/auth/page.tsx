'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import styles from '../styles/auth.module.scss';
import { useUser } from '../context/UserContext';
import { isValidIranPhone } from '../utils/validatephone';
import Input from '../components/Input';
import Button from '../components/Button';

export default function AuthPage() {
  const router = useRouter();
  const { setUser } = useUser();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!isValidIranPhone(phone)) {
      setError('شماره موبایل معتبر نیست.');
      return;
    }

    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      const user = data.results[0];
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      router.push('/dashboard');
    } catch (error) {
      setError('خطا در دریافت اطلاعات');
    }
  };

  return (
    <div className={styles.auth}>
      <h2>ورود</h2>
      <Input value={phone} onChange={setPhone} placeholder="شماره موبایل (مثلاً 09123456789)" />
      {error && <p className={styles.error}>{error}</p>}
      <Button
  onClick={handleLogin}
  disabled={phone.length !== 11}
>
  ورود
</Button>
    </div>
  );
}
'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { useUser } from '@/app/context/UserContext';
import z from 'zod';
import styles from '../../../styles/auth.module.scss';
const schema = z.object({
  phone: z.string().regex(/^09\d{9}$/, 'شماره موبایل معتبر نیست.')
})
export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUser();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
const handleLogin = async () => {
  const result = schema.safeParse({ phone });

  if (!result.success) {
    setError(result.error.issues[0].message);
    return;
  }

  try {
     setLoading(true);
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
    const data = await res.json();
    const user = data.results[0];

    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    router.push('/dashboard');
  } catch (error) {
    setError('خطا در دریافت اطلاعات');
  } finally {
      setLoading(false);
    }
};

  return (
    <div className={styles.auth}>
      <h2>ورود</h2>
       <Input
        value={phone}
        onChange={(val) => {
          setPhone(val);
          setError(''); 
        }}
        placeholder="شماره موبایل (مثلاً 09123456789)"
      />

      {error && <p className={styles.error}>{error}</p>}
      <Button
  onClick={handleLogin}
  // disabled={phone.length !== 11}
>
  {loading ? "isLoading..." : "Login"}
</Button>
    </div>
  );
}
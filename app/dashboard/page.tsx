'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "../styles/dashboard.module.scss";
import { useUser } from '../context/UserContext';

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className={styles.dashboard}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
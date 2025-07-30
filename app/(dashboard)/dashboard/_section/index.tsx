"use client"
import { useUser } from '@/app/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from "../../../styles/dashboard.module.scss";
const DashboardSection = () => {
    const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/auth');
    }
  }, [user, router]);

  // Don't show anything if user is not available
  if (!user) return null;
  return (
      <div className={styles.dashboard}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  )
}

export default DashboardSection

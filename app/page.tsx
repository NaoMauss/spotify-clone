'use client'
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
        <button type="button" onClick={() => router.push("https://accounts.spotify.com/authorize?client_id=b5aa14a0948245149c46eeef9563805f&response_type=code&redirect_uri=http://localhost:3000/api/callback&scope=user-modify-playback-state")}>
          Login
        </button>
    </main>
  );
}
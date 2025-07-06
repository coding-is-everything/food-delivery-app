import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Food Delivery Platform</h1>
        <p>Order your favorite food from your favorite restaurants</p>
        <button>Sign Up</button>
        <button>Log In</button>
      </main>
    </div>
  );
}

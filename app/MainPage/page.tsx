import styles from "./page.module.css";
import Console from "@/components/Console/Console";

export default function Home() {
  return (
    <main className={styles.main}>
      <Console />
    </main>
  );
}

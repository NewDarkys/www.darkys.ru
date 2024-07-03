import styles from "./page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/LoginPrompt/LoginPrompt";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroScene video_src="IntroVideo.mp4"></IntroScene>
      <LoginPrompt></LoginPrompt>
    </main>
  );
}

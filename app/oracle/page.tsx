import styles from "../page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/AltLGPrompt/LoginPrompt";
import AboutMe from "@/components/AboutMe/AboutMe";
import VFX from "@/components/VFX/VFX";

export default function Home() {
  return (
    <main className={styles.main}>
      <VFX server_src="assets/server_short.mp3" />
      <IntroScene video_src="assets/IntroShort.mp4" />
      <LoginPrompt />
      <AboutMe />
    </main>
  );
}

import styles from "./page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/LoginPrompt/LoginPrompt";
import AboutMe from "@/components/AboutMe/AboutMe";
import VFX from "@/components/VFX/VFX";

export default function Home() {
  return (
    <main className={styles.main}>
      <VFX></VFX>
      <IntroScene video_src="IntroVideo.mp4"></IntroScene>
      <LoginPrompt></LoginPrompt>
      <AboutMe></AboutMe>
    </main>
  );
}

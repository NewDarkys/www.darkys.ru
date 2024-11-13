import styles from "./page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/LoginPrompt/LoginPrompt";
import AboutMe from "@/components/AboutMe/AboutMe";
import VFX from "@/components/VFX/VFX";

export default function Home() {
  return (
    <main className={styles.main}>
      <VFX server_src="1server.mp3" />
      <IntroScene video_src="IntroVideo.mp4" />
      <LoginPrompt />
      <AboutMe />
    </main>
  );
}

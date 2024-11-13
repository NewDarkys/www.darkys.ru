import styles from "./page.module.css";
import IntroScene from "@/components/IntroScene/IntroScene";
import LoginPrompt from "@/components/LoginPrompt/LoginPrompt";
import AboutMe from "@/components/AboutMe/AboutMe";
import VFX from "@/components/VFX/VFX";

export default function Home() {
  return (
    <main className={styles.main}>
      /*
      <div className="dmca_mark">
        <a
          href="//www.dmca.com/Protection/Status.aspx?ID=b2f081e5-0e6f-4143-88ee-81f8954cb4e1"
          title="DMCA.com Protection Status"
          className="dmca-badge"
        >
          {" "}
          <img
            src="https://images.dmca.com/Badges/DMCA_logo-bw140w.png?ID=b2f081e5-0e6f-4143-88ee-81f8954cb4e1"
            alt="DMCA.com Protection Status"
          />
        </a>{" "}
        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js">
          {" "}
        </script>
        <script src="https://7eyesmainresearchcenter.statuspage.io/embed/script.js">
          {" "}
        </script>
      </div>
      */
      <VFX server_src="1server.mp3" />
      <IntroScene video_src="IntroVideo.mp4" />
      <LoginPrompt />
      <AboutMe />
    </main>
  );
}

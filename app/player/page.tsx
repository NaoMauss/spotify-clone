import React from "react";
import styles from "./player.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FaRandom } from "react-icons/fa";
import { TiArrowLoop } from "react-icons/ti";
import { GiPauseButton } from "react-icons/gi";

const page = () => {
    
  return (
    <div className={styles.main}>
      <h3>Now Playing</h3>
      <img
        className={styles.mainimage}
        src="https://cdn.discordapp.com/attachments/887705621426745345/1173646182543790080/image.png?ex=6564b62f&is=6552412f&hm=9408072ce60c69909b0e5faf99e0d406a4f10da6cc13f7c71c8c86a00437551b&"
      />
      <h3>Beat it</h3>
      <p>Michael Jackson</p>
      <div className={styles.slider}>
        <p>2:15</p>
        <input type="range" min={0} max={100} />
        <p>4:18</p>
      </div>
      <div className={styles.icons}>
        <TiArrowLoop className={styles.loopicon} />
        <CgPlayTrackPrev className={styles.previcon} />
        <div className={styles.card}>
        <BsFillPlayFill className={styles.playicon} />
        </div>
        <CgPlayTrackNext className={styles.nexticon} />
        <FaRandom className={styles.shuffleicon} />
      </div>
    </div>
  );
};

export default page;    
import Image from "next/image";
import styles from "../page.module.css";

const SpeakerRow = ({ imageSrc, name, title, institution, location }) => (
  <div className={styles.speakerRow}>
    <div className={styles.speakerImage}>
      <Image src={imageSrc} alt={name} width={164} height={184} />
    </div>
    <div className={styles.speakerContent}>
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{institution}</p>
      <p>{location}</p>
    </div>
  </div>
);

export default SpeakerRow;

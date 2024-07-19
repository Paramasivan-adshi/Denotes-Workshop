// pages/organizing-committee.js
import Image from 'next/image';
import styles from "../page.module.css";

const OrganizingCommittee = () => {
  return (
    <div className={styles.container}>
      <h1>ORGANIZING COMMITTEE</h1>
      <h3>PUBLIC HEALTH DENTISTRY</h3>
      <div className={styles.row}>
        <div className={styles.card}>
        <h4>ORGANIZING CHAIRMAN</h4>
          <Image
            src="/AIDentistryBrochure images/sibyl.jpg" // replace with the correct path
            alt="Dr. Sibyl Siluvai, MDS"
            width={150}
            height={150}
            className={styles.image}
          />
  
          <h2>Dr. Sibyl Siluvai, MDS</h2>
          <p>Associate Professor & HOD i/c</p>
        </div>
        <div className={styles.card}>
        <h4>ORGANIZING SECRETARY</h4>
          <Image
            src="/AIDentistryBrochure images/indumathi.jpg" // replace with the correct path
            alt="Dr. Indumathi K.P, MDS"
            width={150}
            height={150}
            className={styles.image}
          />
  
          <h2>Dr. Indumathi K.P, MDS</h2>
          <p>Assistant Professor</p>
        </div>
        <div className={styles.card}>
        <h4>TREASURER</h4>
          <Image
            src="/AIDentistryBrochure images/krishnaprakash.jpg" // replace with the correct path
            alt="Dr. Krishnaprakash G, MDS"
            width={150}
            height={150}
            className={styles.image}
          />

          <h2>Dr. Krishnaprakash G, MDS</h2>
          <p>Assistant Professor</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.card}>
        <h4>REGISTRATION</h4>
          <Image
            src="/AIDentistryBrochure images/yamini.jpg" // replace with the correct path
            alt="Yamini"
            width={150}
            height={150}
            className={styles.image}
          />

          <h2>Dr. K Yamini, BDS</h2>
          <p>Tutor</p>
        </div>
        <div className={styles.card}>
        <h4>HOSPITALITY</h4>
          <Image
            src="/AIDentistryBrochure images/jeyashree.jpg" // replace with the correct path
            alt="Jayashree"
            width={150}
            height={150}
            className={styles.image}
          />
   
          <h2>Dr. J Jayashree, BDS</h2> {/* Add the correct name */}
          <p>Tutor</p>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;

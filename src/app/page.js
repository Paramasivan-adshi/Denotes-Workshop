import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const imageCollegelist = [
    {
      src: "/AIDentistryBrochure images/2.png",
      alt: "Workshop Banner 2",
      width: 348,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/3.jpg",
      alt: "Workshop Banner 3",
      width: 426,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/4.jpg",
      alt: "Workshop Banner 4",
      width: 292,
      height: 345,
      layout: "responsive",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.pagesize}>
        <div className={styles.clearfix}>
          <div className={styles.imageContainer}>
            {imageCollegelist.map((image, index) => (
              <div className={styles.imageItem} key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout={image.layout}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bannerHead}>
          <h1>DEPARTMENT OF PUBLIC HEALTH DENTISTRY</h1>
          <h1>SRM KATTANKULATHUR DENTAL COLLEGE & HOSPITAL</h1>
          <h2>NATIONAL LEVEL WORKSHOP ON</h2>
          <h3>ARTIFICIAL INTELLIGENCE IN DENTISTRY</h3>
        </div>
      </div>
      <div className={styles.programDetails}>
        <div className={styles.venuedet}>
          <div className={styles.venuecal}>
            <p>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240809T000000Z/20240811T000000Z&text=Workshop+on+August+9th+%26+10th+2024&details=Join+us+for+an+exciting+workshop+on+dental+innovations&location=T.P.+Ganesan+Auditorium%2C+Mini+Hall+2"
                target="_blank"
                rel="noopener noreferrer"
              >
                9th & 10th<br></br>
                August 2024
              </a>
            </p>
          </div>
          <div className={styles.venuelocate}>
            <p>
              <a
                href="https://www.google.com/maps/dir//mini+hall+2+t.p.+ganesan+auditorium+location+map/@12.8247518,79.9642782,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a52f70c95688435:0xfb2355e047e8b473!2m2!1d80.0466801!2d12.8247646?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                MINI HALL 2<br></br>
                T.P. GANESAN AUDITORIUM
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.speakersList}>
        <h1>KNOW YOUR SPEAKERS</h1>
      </div>
    </main>
  );
}

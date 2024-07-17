"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SpeakerRow from "./components/SpeakerRow";
import SessionDetails from "./components/SessionDetails";

export default function Home() {
  const router = useRouter();
  const back = () => {
    router.push("/test");
  };
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
  const imageSponsorlist = [
    {
      src: "/AIDentistryBrochure images/5.jpg",
      alt: "Sponsor 1",
      width: 348,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/6.jpg",
      alt: "Sponsor 2",
      width: 426,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/7.jpg",
      alt: "Sponsor 3",
      width: 292,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/8.jpg",
      alt: "Sponsor 4",
      width: 292,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/9.jpg",
      alt: "Sponsor 4",
      width: 292,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/10.jpg",
      alt: "Sponsor 4",
      width: 292,
      height: 345,
      layout: "responsive",
    },
    {
      src: "/AIDentistryBrochure images/11.jpg",
      alt: "Sponsor 4",
      width: 292,
      height: 345,
      layout: "responsive",
    },
  ];
  const speakers = [
    {
      imageSrc: "/AIDentistryBrochure images/lakshmanan.jpg", // Ensure you have these images in the public/images directory
      name: "Mr. Lakshmanan Sethu",
      title: "Lead – AI & ML Solutions",
      institution: "Google LLC",
      location: "USA",
    },
    {
      imageSrc: "/AIDentistryBrochure images/ramkumar.jpg",
      name: "Mr. Ramkumar Venkatesan",
      title: "Chief Executive Officer",
      institution: "Simmer Tech Inc",
      location: "California, USA",
    },
    {
      imageSrc: "/AIDentistryBrochure images/debnath.jpg",
      name: "Prof. Debnath Pal",
      title: "Computational & Data Sciences",
      institution: "Indian Institute of Science",
      location: "Bangalore",
    },
    {
      imageSrc: "/AIDentistryBrochure images/abirami.jpg",
      name: "Dr. Abirami Murugappan",
      title: "Professor",
      institution: "Information Science & Technology, Anna University",
      location: "Chennai",
    },
    {
      imageSrc: "/AIDentistryBrochure images/madan.jpg",
      name: "Dr. P.D. Madan Kumar",
      title: "Professor and HOD Public Health Dentistry",
      institution: "Ragas Dental College",
      location: "Chennai",
    },
    {
      imageSrc: "/AIDentistryBrochure images/nandita.jpg",
      name: "Dr. Nandita Kshetrimayum",
      title: "Associate Professor & HOD Public Health Dentistry",
      institution: "RIMS, Imphal",
      location: "Manipur",
    },
    {
      imageSrc: "/AIDentistryBrochure images/kunaal.jpg",
      name: "Dr. Kunaal Dhingra",
      title: "Additional Professor, Periodontology",
      institution: "CDER, AIIMS",
      location: "New Delhi",
    },
    {
      imageSrc: "/AIDentistryBrochure images/deepika.jpg",
      name: "Dr. Deepika Mishra",
      title: "Additional Professor, Oral Pathology",
      institution: "CDER, AIIMS",
      location: "New Delhi",
    },
    {
      imageSrc: "/AIDentistryBrochure images/varun.jpg",
      name: "Dr. Varun Surya",
      title: "Assistant Professor, Oral Pathology",
      institution: "CDER, AIIMS",
      location: "New Delhi",
    },
    {
      imageSrc: "/AIDentistryBrochure images/rajkumar.jpg",
      name: "Dr. R. Rajkumar",
      title: "Associate Professor, School of Computing",
      institution: "SRMIST",
      location: "Chennai",
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
        <div onClick={back} className={styles.bannerHead}>
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
              <Link
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240809T000000Z/20240811T000000Z&text=Workshop+on+August+9th+%26+10th+2024&details=Join+us+for+an+exciting+workshop+on+dental+innovations&location=T.P.+Ganesan+Auditorium%2C+Mini+Hall+2"
                passHref
              >
                9th & 10th<br></br>
                August 2024
              </Link>
            </p>
          </div>
          <div className={styles.venuelocate}>
            <p>
              <Link
                href="https://www.google.com/maps/dir//mini+hall+2+t.p.+ganesan+auditorium+location+map/@12.8247518,79.9642782,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x3a52f70c95688435:0xfb2355e047e8b473!2m2!1d80.0466801!2d12.8247646?entry=ttu"
                passHref
              >
                MINI HALL 2<br></br>
                T.P. GANESAN AUDITORIUM
              </Link>
            </p>
          </div>
        </div>
        {/* <div className={styles.sponsers}>
          <div className={styles.imageSponsors}>
          {imageSponsorlist.map((image, index) => (
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
      
        </div> */}
      </div>
      <div className={styles.speakersList}>
        <h1>KNOW YOUR SPEAKERS</h1>
        {speakers.map((speaker, index) => (
          <SpeakerRow key={index} {...speaker} />
        ))}
      </div>
      <div className={styles.sessiondetails}>
        <SessionDetails />
      </div>
      <div className={styles.chefAdvisors}>
        <h1>CHIEF ADVISORS</h1>
        <div className={styles.chefAdvisorimage}>
          <Image
            src="/AIDentistryBrochure images/vivek.jpg" // Path to your image
            alt="DR Vivek image"
            width={500} // Desired width of the image
            height={300} // Desired height of the image
            layout="responsive" // Optional layout setting
          />
          <h2>Dr. N Vivek</h2>
          <p>Dean,</p>
          <p>SRMKDC</p>
          <Image
            src="/AIDentistryBrochure images/magesh.jpg" // Path to your image
            alt="DR Magesh image"
            width={500} // Desired width of the image
            height={300} // Desired height of the image
            layout="responsive" // Optional layout setting
          />
          <h2>Dr. Magesh KT</h2>
          <p>Vice principal,</p>
          <p>SRMKDC</p>
        </div>
      </div>
      <footer style={styles.footerStyle}>
        <div className={styles.footerContainer}>
          <div className={styles.footerwidth}>
          <div className={styles.registrationDetails}>
            <h2>REGISTRATION FEES:</h2>
            <p>For Faculty : Rs. 1000/-</p>
            <p>For PG / UG Students : Rs. 750/-</p>
            <div className={styles.registrationLink}>
              <h2>For Registration click:</h2>

              <p>
                <a
                  href="https://forms.gle/wUzpfVp7x65mVQLw8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://forms.gle/wUzpfVp7x65mVQLw8
                </a>
              </p>
              <h3>Registration closes on July 25, 2024</h3>
            </div>
          </div>
          <div className={styles.BankaccountDet}>
            <h2>BANK ACCOUNT DETAILS:</h2>
            <p>Name of the Account : SRMIST Dental College</p>
            <p>Name of the Bank : City Union Bank Ltd</p>
            <p>Account Number : 500101012867508</p>
            <p>IFSC Code : CIUB0000117</p>
            <p>Bank Branch : Chennai, Tambaram</p>
          </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

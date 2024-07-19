import styles from "../page.module.css";
const sessionDetailsIntro = [
  {
    time: "09:30 - 10:15 am",
    topic: "Health Care Revolution with AI",
    speaker: "Mr. Lakshmanan Sethu",
  },
  {
    time: "10:15 - 11:00 am",
    topic: "Neural Network and Deep Learning in Healthcare",
    speaker: "Dr. R. Rajkumar",
  },
  {
    time: "11:00 - 12:00 pm",
    topic: "Inauguration",
    speaker: "",
  },
  {
    time: "12:00 - 12:45 pm",
    topic: "Natural Language Processing in Health Care",
    speaker: "Dr. Abirami Murugappan",
  },
  {
    time: "12:45 - 01:30 pm",
    topic: "Applications of AI in Dentistry",
    speaker: "Dr. P D Madan Kumar",
  },
  {
    time: "01:30 - 02:15 pm",
    topic: "Lunch",
    speaker: "",
  },
  {
    time: "02:15 - 03:00 pm",
    topic:
      "Talk, Type, Save time: A Hands on Experience with denotes.app (Empowering Dentists with AI)",
    speaker: "Mr. Ramkumar Venkatesan",
  },
  {
    time: "03:00 pm",
    topic: "High Tea",
    speaker: "",
  },
];
const sessionDetailsDay2Diagnosis = [
  {
    time: "09:30 - 10:00 am",
    topic: "Application of AI in Public Health",
    speaker: "Dr. Nandita Kshetrimayum",
  },
  {
    time: "10:00 - 10:45 am",
    topic: "The Ethical Framework of AI in Biomedical Research and Healthcare",
    speaker: "Dr. Kunaal Dhingra",
  },
  {
    time: "10:45 - 11:00 am",
    topic: "Tea",
    speaker: "",
  },
  {
    time: "11:00 - 11:30 am",
    topic:
      "Potential Uses of AI in Oral Cancer Diagnosis and Precancerous Lesion Detection",
    speaker: "Dr. Varun Surya",
  },
  {
    time: "11:30 - 12:00 pm",
    topic: "AI Analysis of Oral Cancer Data",
    speaker: "Prof. Debnath Pal",
  },
  {
    time: "12:00 - 12:30 pm",
    topic: "Insights into Projects on Role of AI in Oral Cancer",
    speaker: "Dr.Deepika Mishra",
  },
  {
    time: "12:30 - 01:15 pm",
    topic: "Lunch",
    speaker: "",
  },
];

const sessionDetailsDay2Cancer = [
  {
    time: "09:30 - 10:00 am",
    topic: "Application of AI in Public Health",
    speaker: "Dr. Nandita Kshetrimayum",
  },
  {
    time: "10:00 - 10:45 am",
    topic: "The Ethical Framework of AI in Biomedical Research and Healthcare",
    speaker: "Dr. Kunaal Dhingra",
  },
  {
    time: "10:45 - 11:00 am",
    topic: "Tea",
    speaker: "",
  },
  {
    time: "11:00 - 11:30 am",
    topic:
      "Potential Uses of AI in Oral Cancer Diagnosis and Precancerous Lesion Detection",
    speaker: "Dr. Varun Surya",
  },
  {
    time: "11:30 - 12:00 pm",
    topic: "AI Analysis of Oral Cancer Data",
    speaker: "Prof. Debnath Pal",
  },
  {
    time: "12:00 - 12:30 pm",
    topic: "Insights into Projects on Role of AI in Oral Cancer",
    speaker: "Dr.Deepika Mishra",
  },
  {
    time: "12:30 - 01:15 pm",
    topic: "Lunch",
    speaker: "",
  },
];

const sessionDetailsDay2OralCancer = [
  {
    time: "01:15 - 02:00 pm",
    topic: "Data Collection and Anonymization",
    perspective: "Doctors Role",
    presenter: "Dr. Deepika Mishra & Dr. Varun Surya",
  },
  {
    time: "02:00 - 02:45 pm",
    topic: "Data Ingestion, Annotation and Curation",
    perspective: "AI Scientist Role",
    presenter: "Prof. Debnath Pal",
  },
  {
    time: "02:45 - 03:00 pm",
    topic: "Discussion and Closing Note",
    perspective: "",
    presenter: "",
  },
  {
    time: "03:00 pm",
    topic: "High Tea",
    perspective: "",
    presenter: "",
  },
];

export default function SessionDetails() {
  return (
    <div className={styles.sessionDetails}>
      <h1>SESSION DETAILS</h1>
      <h2>DAY 1: INTRODUCTION TO ARTIFICIAL INTELLIGENCE (AI)</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SESSION</th>
            <th>TOPIC</th>
            <th>SPEAKER</th>
          </tr>
        </thead>
        <tbody>
          {sessionDetailsIntro.map((session, index) => (
            <tr key={index}>
              <td>{session.time}</td>
              <td>{session.topic}</td>
              <td>{session.speaker}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>DAY 2: HARNESSING AI IN ORAL CANCER DIAGNOSIS</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SESSION</th>
            <th>TOPIC</th>
            <th>SPEAKER</th>
          </tr>
        </thead>
        <tbody>
          {sessionDetailsDay2Diagnosis.map((session, index) => (
            <tr key={index}>
              <td>{session.time}</td>
              <td>{session.topic}</td>
              <td>{session.speaker}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>
        DAY 2: DEMONSTRATION SESSION: AI TOOLS IN DETECTION OF ORAL CANCER
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SESSION</th>
            <th>TOPIC</th>
            <th>PERSPECTIVE</th>
            <th>PRESENTER</th>
          </tr>
        </thead>
        <tbody>
          {sessionDetailsDay2OralCancer.map((session, index) => (
            <tr key={index}>
              <td>{session.time}</td>
              <td>{session.topic}</td>
              <td>{session.perspective}</td>
              <td>{session.presenter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <h2><a href="https://www.linkedin.com/in/nicholas-d-agostino-me/">Let's Connect<FaLinkedin /></a></h2>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my about page.<br></br>

        Established professional with a growing background in Robotic Process Automation (RPA) development and analysis, built upon earlier experiences in Mechanical Engineering. Detail-oriented with exceptional critical thinking skills and the ability to work effectively either independently or collaboratively. Blue Prism certifications as Developer and Solution Designer.
      </p>
      <h1><a href="https://drive.google.com/file/d/128zXrMNIs8zOY8i9ajPlv7cOimEdcEda/view?usp=share_link" target="_blank">View resume</a></h1>
      <h1><a href="https://drive.google.com/file/d/128zXrMNIs8zOY8i9ajPlv7cOimEdcEda/view?usp=share_link" download>Download PDF</a></h1>
    </section>
  );
}

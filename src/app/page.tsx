import { Background } from "@/components/Background";
import { HighlightedText } from "@/components/HighlightedText";

export default function Home() {
  return (
    <>
      <article className="mx-auto w-8/12">
        <img
          src="me.webp"
          alt="My photo"
          width="320"
          height="320"
          className="rounded-full float-left mr-8 mb-6"
        />
        <section>
          <h2 className="text-lg font-black mb-4">Hi, I&apos;m Dmitrii.</h2>
          <p className="font-bold mb-4">
            I build secure and efficient web applications.
          </p>
          <p className="mb-2">
            I am an experienced software developer with a focus on frontend
            technologies, specializing in{" "}
            <HighlightedText>React</HighlightedText> and{" "}
            <HighlightedText>TypeScript</HighlightedText>. I am also proficient
            in <HighlightedText>NodeJS</HighlightedText>,{" "}
            <HighlightedText>MongoDB</HighlightedText>,{" "}
            <HighlightedText>Angular</HighlightedText>,{" "}
            <HighlightedText>Svelte</HighlightedText>, and more.
          </p>
          <p className="mb-2">
            I am skilled in creating high-quality web applications, developing
            npm libraries, and setting up development infrastructure, including{" "}
            <HighlightedText>GitLab CI</HighlightedText> and{" "}
            <HighlightedText>GitHub Actions</HighlightedText>.
          </p>
          <p className="mb-2">
            I am adept at working in diverse team environments on complex
            projects, contributing to all phases of the Software Development
            Life Cycle with a focus on Agile methodologies.
          </p>
          <p className="mb-2">
            I advocate for high standards and quality, regularly proposing
            innovative ideas, participating in code reviews, and conducting demo
            sessions to improve work quality.
          </p>
          <p className="mb-2">
            I have a strong understanding of software architecture and technical
            solution design, with a versatile skill set in both front-end and
            back-end development, ready to tackle full-stack challenges.
          </p>
          <p className="mb-2">
            I possess strong analytical and problem-solving abilities, attention
            to detail, and effective communication skills, fostering a
            collaborative and productive team environment.
          </p>
        </section>
      </article>
      <Background color="bg-gray-800" />
    </>
  );
}

import {
  About,
  Certifications,
  Education,
  Experience,
  Hero,
  Projects,
  Skills,
} from "@/components/landing";

export const dynamic = "force-static";

export default async function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-10 lg:px-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
    </div>
  );
}
